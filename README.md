# dgm3760 
Repo for students to get comfortable with git and Node.js.

*Be sure you have a github account. You will need one to turn assignments in for the class*

Bonus points for anyone finding my typos, fixing them, and creating a pull request for them. Bonus points will only be giving via the pull request.

## Exercise 2 - Git Merging & Node Modules

In this exercise we will talk about how to keep changes happening in the code base synced with your branch.

We will also talk about Node Modules. How they use a *module* object to *export* and expose functionality in Node applications.

First thing is first. I have made added a few files to a branch and you will need to merge those changes into your branch to complete the exercise. 

You will be merging a branch into your personal branch.

#### Remember - Current Branch is Destination of merge

When you run the `git merge <branch|commit>` command whatever branch is your current working copy is the destination of the merge. 

With that said, let's begin.

### Make sure you have YOUR branch checked out

`git checkout <yourbranch>`

### Merge ex2 into your branch

You are now ready to run the merge command. In this case I have a tag (a name given to a specific commit) that holds the files you will need to learn about node modules. So run the following command:

`git merge ex2`

### You should now have a folder named 'ClassSession-NodeModules'!
