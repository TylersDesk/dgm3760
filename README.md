# dgm3760 
Repo for students to get comfortable with git and Node.js.

*Be sure you have a github account. You will need one to turn assignments in for the class*

Bonus points for anyone finding my typos, fixing them, and creating a pull request for them. Bonus points will only be giving via the pull request.

## Exercise 1 - Git Basics

In this assignment we will be getting comfortable with checking out repos, switching branches, creating branches and committing code. As well as creating issues.

### First - No really... Clone repo

clone the repo:

`git clone https://github.com/TylersDesk/dgm3760.git`

### First - Create Issue

Create an issue in this repo requesting access. I will demonstrate in class.

### Practice switch branches

`git checkout <branchname>`
`git checkout dev`
`git checkout master`

### Create a branch with your name, based off of the DEV branch

`git checkout dev`

`git checkout -b <yourname>`

OR

`git branch <yourname>`
`git checkout <yourname>`

### Create a file named file.txt in the root of your branch

`touch file.txt`

### Stage your file to be committed

`git add file.txt`

OR

`git add -A`

### Commit your file to repo with a message

`git commit -m "This is the message"`

### Finally push your branch up to the github repo

`git push -u origin <mybranch>`





