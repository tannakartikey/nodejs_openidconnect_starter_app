unzip -d sslforfree sslforfree.zip
mv sslforfree/certificate.crt server-crt.pem
mv sslforfree/private.key server-key.pem
mv sslforfree/ca_bundle.crt ca-crt.pem
rmdir sslforfree
