
# Amazon Clone  with  React


# Tech Stack :
- Use [Next.js](https://nextjs.org/)
 for good environment to develop the React.
- Use [yarn](https://yarnpkg.com/) as package manager
- Style with [Tailwind](https://tailwindcss.com/)
- Manage the react stage with [Redux](https://redux.js.org/) 
- Payment with [Stipe](https://stripe.com/th?utm_campaign=TH_EN_Search_Brand_Stripe_EXA-19299490305&utm_medium=cpc&utm_source=google&ad_content=642259720785&utm_term=stripe&utm_matchtype=e&utm_adposition=&utm_device=c&gclid=CjwKCAjwrpOiBhBVEiwA_473dNm946BkVTaoyvevJWoPcIbhuEWviRKjK4cu3KJ5OKZyMyr-AK2YgBoCYb0QAvD_BwE).
- Authentication with [OAuth](https://oauth.net/2/).


# Process Development : 
**1.) &nbsp;Setting  Environment**

-   Create new project &nbsp;:&nbsp; [command to create react project with next.js](https://nextjs.org/docs/getting-started) &nbsp; ``` yarn create next-app [your project name] ```
-   Try to edit project ,then run to see the result 
    &nbsp;:&nbsp; you can edit in &nbsp;" app.js "&nbsp; file and then [run with this command](https://nextjs.org/docs/getting-started) &nbsp; ``` yarn dev ```
-   Setting up tailwind &nbsp;: 

    >   1.) &nbsp;Installation &nbsp;:&nbsp; [command to install tailwind](https://tailwindcss.com/docs/installation) &nbsp; ``` yarn add -D tailwindcss ```<br/>
    >   2.) &nbsp;Add the paths in tailwind.config.js file. &nbsp; [see more how to config ?](https://tailwindcss.com/docs/installation)<br/> 
    >   3.) &nbsp;Start using Tailwind ! &nbsp; [see more how to use tailwind ?](https://tailwindcss.com/docs/installation)<br/> 

  **2.) &nbsp;Development  Process** 
-   Basics React 
    >   **What is React ?** &nbsp;:&nbsp; React.js is an JavaScript library developed by Facebook. It’s used for building web applications quickly. <br/><br/>
    >   **How to use React with next.js ?** &nbsp;:&nbsp; After you create a project, you will get a project directory. Now let's figure out what each file and folder  means and does.      
    >   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1.)&nbsp; **[node_modules](https://www.freecodecamp.org/news/get-started-with-react-for-beginners/)** &nbsp;:&nbsp; contains all of our dependencies.<br/>
    >   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2.)&nbsp; **[public](https://nextjs.org/docs/basic-features/static-file-serving)** &nbsp;:&nbsp; this folder is store static files, like images.<br/>
    >   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3.)&nbsp; **[src](https://nextjs.org/docs/advanced-features/src-directory)** &nbsp;:&nbsp; This is a ***development area !!!*** <br/>
    >   - src/app &nbsp;:&nbsp; This folder contain all about " Pages Components ".
    >   - src/pages &nbsp;:&nbsp; 
    >     > * src/pages/api &nbsp;:&nbsp; This folder contain " API Config files ".<br/> 
    >     > * src/pages/_app.js &nbsp;:&nbsp; It's a " Global config ".<br/>
    >     > * src/pages/index.js &nbsp;:&nbsp; This folder that takes components to paste.It's like a " Home Page ".<br/>
    >     > * src/pages/components &nbsp;:&nbsp; Most developers create this folder to store all their " Components " in one place.<br/>
    >     > * src/pages/slices &nbsp;:&nbsp; This folder store redux-store code
    >   - src/styles &nbsp;:&nbsp; [It's built-in css support by next.js](https://nextjs.org/docs/basic-features/built-in-css-support).<br/>   
    >   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4.)&nbsp; **[.gitignore](https://www.freecodecamp.org/news/get-started-with-react-for-beginners/)** &nbsp;:&nbsp;  It's a file that is not actually tracked by the source control, such as [.env file](https://blog.bitsrc.io/a-gentle-introduction-to-env-files-9ad424cc5ff4). <br/>
    >   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5.)&nbsp; **[package.json](https://dev.to/codergirl1991/what-is-create-react-app-part-2-packagejsonreadme-nodemodules-1bh9)** &nbsp;:&nbsp; store information such as name, author and version  as well as starter scripts and dependencies  used in the project. It's config file with json.<br/>
    >   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5.)&nbsp; **[package-log.json](https://docs.npmjs.com/cli/v9/configuring-npm/package-lock-json) or [yarn.lock](https://classic.yarnpkg.com/lang/en/docs/yarn-lock/)** &nbsp;:&nbsp; In order to get consistent installs across machines, Package manager needs to store exactly which versions of each dependency were installed. <br/>
   
    









