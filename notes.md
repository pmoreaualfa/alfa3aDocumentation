# install
## GIT
git remote add origin git@github.com:pmoreaualfa/alfa3aDocumentation.git  
(erreur key: voir ci-dessus)

## CONTENT MODULE
npx nuxi init alfa3aDocs -t content  
cd alfa3aDocs  
yarn install  
yarn dev  









# erreur key
[How to fix "Permission denied (publickey)." error when pushing to Github (mac) | UHD Ed](https://uhded.com/fix-permission-denied-public-key-github-error)
this is how I fixed this "Permission denied (publickey)" error.

Open your terminal and do cd ~/.ssh.

Type ls. You should see id_rsa and id_rsa.pub. My issue was that those files were not there anymore. To create those files, do step 3:

Run: ssh-keygen -t rsa -C "your-email-here@example.com", replacing "your-email-here@example.com" with your actual email.

Open the file id_rsa.pub. If you have VSCode, you can just do code id_rsa.pub (explained here), and it opens the file in VS Code. Otherwise, you can do vim id_rsa.pub. (you can exit out of vim by typing :q!).

Copy everything you see (make sure you don't copy any extra spaces).

Go to github.com -> Settings -> SSH and GPG Keys https://github.com/settings/keys. Click "New SSH Key". Give it a title and paste in the key. Finally, click "Add SSH Key".

That's it. Try git push again, and it should work.
