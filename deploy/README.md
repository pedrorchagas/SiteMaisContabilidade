# Deploy — Mais Contabilidade (Amazon S3)

Site estático com páginas `.html` planas no root. As URLs mantêm a extensão:

- `/`                          → `index.html`
- `/sobre.html`               → página Sobre
- `/contato.html`             → página Contato
- `/politica-privacidade.html`→ Política de Privacidade

O S3 serve esses arquivos diretamente — **sem CloudFront e sem configuração extra de roteamento**.

---

## 1. Criar e configurar o bucket

1. Crie um bucket (ex.: `maiscontabilidade.com.br`).
2. **Properties → Static website hosting → Enable**
   - **Index document:** `index.html`
   - **Error document:** `index.html` (ou crie um `404.html` e use-o aqui)
3. **Permissions** → desbloqueie o acesso público e aplique uma bucket policy de leitura:

```json
{
  "Version": "2012-10-17",
  "Statement": [{
    "Sid": "PublicReadGetObject",
    "Effect": "Allow",
    "Principal": "*",
    "Action": "s3:GetObject",
    "Resource": "arn:aws:s3:::SEU-BUCKET/*"
  }]
}
```

---

## 2. Subir os arquivos

Sobe tudo, exceto docs e arquivos de desenvolvimento:

```bash
BUCKET=seu-bucket

aws s3 sync . s3://$BUCKET --delete \
  --exclude ".git/*" \
  --exclude "deploy/*" \
  --exclude "*.md" \
  --exclude "QUICK-START.html" \
  --exclude "*.DS_Store" \
  --exclude ".htaccess"
```

> O `.htaccess` é exclusivo do Apache e **não funciona no S3** — por isso é excluído.

O site fica disponível no endpoint de website do bucket
(`http://SEU-BUCKET.s3-website-REGIAO.amazonaws.com`).

---

## 3. Testar localmente

```bash
python3 -m http.server 8000   # http://localhost:8000
```

---

## Observações

- **HTTPS / domínio próprio:** o endpoint de website do S3 é HTTP. Para HTTPS com
  domínio próprio, será necessário colocar um CloudFront na frente (opcional, fora deste fluxo).
- **Cache e cabeçalhos de segurança** (CSP, HSTS etc.) não se aplicam só com S3;
  dependem de CloudFront.
