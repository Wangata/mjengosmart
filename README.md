Getting Started
Before you get started, there are some prior conditions or prerequisites required by your system. Make sure that your system

Has a good installer: 
In the process, you will be downloading multiple software packages, so in order to have a fluent and hassle-free process, you need a decent installer or a package manager.

Has an NPM:
NPM (Node Package Manager) is probably the best package manager for this task. We will be dealing with JavaScript in this piece of programming, and to run the framework of JavaScript in the given environment, we need NPM.To use this you’ll need to install Node.js. Once you’ve downloaded Node.js, NPM is automatically installed.


Installing NPM and Nord.js:

[Go to this link Node.js](https://nodejs.org/en/)
Download the current latest features version - not the LTS version 

While installing Node.js, install NPM with it too

Why Install Node.js?
While installing Node.js, in the customs settings options you will see an option for NPM package manager. As noted by its name Node Package Manager (NPM) is basically an additional feature that you get with Node.js along with its useful features.

You can’t have the Node Package Manager (NPM) separately without installing the Node.js, so you need to have Node.s for this task.

You also need to have a text editor. You aren’t bound to a specific editor, however I recommend you choose the text editor by Visual Studio also called the VS Code or the Visual Studio Code. It can be easily downloaded from Visual Studio’s website here. 
https://code.visualstudio.com/

Using Create React App: The NPX method 
This method is called the NPX method, the general form of a NPX command that has to be used is as follows: npx create-react-app<project_name>

In our case we replace the project name with: npx create-react-app mjengo-smart

To make a new Create application, we use the Create React App which is a command-line interface tool. The purpose of Create React App is to enable you to make, and run, the React applications without having to do any configurations. With the Create React App, all you need to do is run a simple command and your desired React project has been made.

Follow these steps if you ever want to create another rect app in future:
Open the integrated terminal in visual studio and run the following command:

npx create-react-app hello-world
npx create-react-app hello-world
Here we chose “hello world” as the name of our project. You can choose whatever you like.

After running this command successfully, you should be able to see an application folder created with the name you chose.

Now to run this app, you’ll need to initially need to navigate within the folder containing the project. This can be done by the following command:

Once you’ve applied this command, it will lead you to your web browser where you would be able to see http://localhost:3000/ running with your application.

Now go back to your Visual Studio: 

Click on the arrow icon next to the “hello world” folder to see further options by expanding it
From there expand the source folder by clicking on the arrow next to “src” 
From the displayed options open “ App.js”
Edit the text by changing it to Hello Word
Save your work in the file
Once you’ve saved the file, the browser would automatically refresh displaying your first React application.

Using the NPM Method
There is an alternate method which is known as the NPM method. To do this, you will have to create the React app globally. After doing this, you can use the package to create projects or apps.

Install the package globally by using the following command:
npm-install-create-react-app -g 

After installing it, use another command as follows:
create-react-app<project_name>

Why do we use the NPX approach rather than the NPM method?

The NPX approach makes completing your task easier and hassle-free as you don’t need to install the package globally. With the NPM method, you need to install it globally and constantly update the Create app package.

Happy coding!
