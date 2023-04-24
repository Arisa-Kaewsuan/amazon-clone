
# Amazon Clone  with  React
**:: CONTENTS ::**
* Tech Stack
* Process Development
* Basics

  * Setting  Environment
  * Tools <br/>
      > * Basic React<br/>
      > * Basic Redux<br/>
      > * Basic OAuth
* Terminologies    
 <br/><br/><br/>


# Tech Stack :
- Use [Next.js](https://nextjs.org/)
 for good environment to develop the React.
- Use [yarn](https://yarnpkg.com/) as package manager
- Style with [Tailwind](https://tailwindcss.com/)
- Manage the react stage with [Redux](https://redux.js.org/) 
- Payment with [Stipe](https://stripe.com/th?utm_campaign=TH_EN_Search_Brand_Stripe_EXA-19299490305&utm_medium=cpc&utm_source=google&ad_content=642259720785&utm_term=stripe&utm_matchtype=e&utm_adposition=&utm_device=c&gclid=CjwKCAjwrpOiBhBVEiwA_473dNm946BkVTaoyvevJWoPcIbhuEWviRKjK4cu3KJ5OKZyMyr-AK2YgBoCYb0QAvD_BwE).
- Authentication with [NextAuth](https://next-auth.js.org/getting-started/example) &nbsp; [OAuth](https://oauth.net/2/).
<br/><br/><br/>

# Process Development :  
1.) &nbsp; Make a responsive " Header " component : use [**JSX**](https://legacy.reactjs.org/docs/introducing-jsx.html) and [**Tailwind**](https://tailwindcss.com/docs/responsive-design).

2.) &nbsp; Make a responsive " Banner " component  
- [How do i make carousel banner in nextjs ?](https://cloudinary.com/blog/guest_post/3-ways-to-implement-a-carousel-in-nextjs)
- [How do i make carousel banner in react ?](https://www.makeuseof.com/react-js-interactive-carousel-build/)
- [What react libraries are there to make a carousel ?](https://alvarotrigo.com/blog/react-carousels/)<br/> 
This tutorial use [**React-Responsive-Carousel**](https://www.npmjs.com/package/react-responsive-carousel).

3.) &nbsp; Make a responsive " ProductFeed " component
- [I wanna get fake e-commerce product to make e-commerce web prototype with react](https://www.google.com/search?q=I+wanna+get+fake+e-commerce+product+to+make+e-commerce+web+prototype+with+react&sxsrf=APwXEddTfamqYTZLWnsq06EdRLFojkj0IQ%3A1682267680679&ei=IF5FZKKRKYmw4-EPssav6Aw&ved=0ahUKEwiioZi8t8D-AhUJ2DgGHTLjC80Q4dUDCA8&oq=I+wanna+get+fake+e-commerce+product+to+make+e-commerce+web+prototype+with+react&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQDEoECEEYAFAAWABgAGgAcAF4AIABAIgBAJIBAJgBAKABAQ&sclient=gws-wiz-serp)
- [How i make fake product in react ?](https://www.robinwieruch.de/react-mock-data/)
- [How i get mock data in react ?](https://www.google.com/search?q=how+i+get+mock+data+in+react&sxsrf=APwXEdfMMocdHrtlOtHh3NEvLIQ5YSSFHg%3A1682267609694&source=hp&ei=2V1FZPvTKI2f-AaT64fQCg&iflsig=AOEireoAAAAAZEVr6UkhTPKl3_gphE6aZql5LNuDMpGJ&oq=how+i+get+mock+data+&gs_lcp=Cgdnd3Mtd2l6EAMYADIFCCEQoAEyCAghEKABEIsDMggIIRCgARCLAzILCCEQFhAeEB0QiwMyCwghEBYQHhAdEIsDMgsIIRAWEB4QHRCLAzILCCEQFhAeEB0QiwMyCwghEBYQHhAdEIsDMgsIIRAWEB4QHRCLAzILCCEQFhAeEB0QiwM6BwgjEOoCECc6BAgjECc6BwguEIoFEEM6BwgAEIoFEEM6CwgAEIAEELEDEIMBOgsILhCABBCxAxCDAToFCC4QgAQ6CwguEIMBELEDEIAEOg4ILhCABBCxAxDHARDRAzoICAAQgAQQsQM6BQgAEIAEOgsIABCKBRCxAxCDAToICC4QgAQQ1AI6CAgAEIAEEMsBOggILhCABBDLAToLCC4QgAQQ1AIQywE6BggAEBYQHjoICAAQFhAeEAo6CAgAEBYQHhAPOggIIRAWEB4QHToHCCEQoAEQCjoKCCEQoAEQChCLA1C3G1i8U2CTZGgBcAB4AIABlAGIAZsRkgEENC4xNpgBAKABAbABCrgBAw&sclient=gws-wiz)<br/> 
This tutorial use [**Fake Store API**](https://fakestoreapi.com/).
- [How I fetch data from api with nextjs ?](https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props) : use server side rendering to fetch product from fake-store api
- [How I  insert banner between product api in react ?](https://stackoverflow.com/questions/72977045/how-can-i-put-an-ad-banner-after-a-row-of-content-using-react-and-tailwind-css) : use slice

4.) &nbsp; Try to deploy project on [**Vercel**](https://vercel.com/docs)
- vercel will pull the project from git remote to deploy . So, we need to push project from local to remote.<br/> 

``` git init ``` : It is the command to create a " .init " file in the project to store the committed file.

``` git add * ``` : Select the file to commit.If ัyou using * means select all files.

``` git commit -m "[messege you want]"``` : Save the changes in the .init file (git local). It make you to look back at older versions of the code.

``` git branch -M main ```

``` git remote add origin [your remote address (https-link)] ``` : You need to create a project directory on the remote to store pushed data.

``` git push -u origin  main ``` : You now have a project on git repository. chek it out ! and deploy it on vercel.

5.) &nbsp; Make authentication portion
- [How to implement google authentication in next js](https://www.telerik.com/blogs/how-to-implement-google-authentication-nextjs-app-using-nextauth) &nbsp;:&nbsp; use NextAuth

- [What is API route in react ?](https://nextjs.org/docs/api-routes/introduction) &nbsp;:&nbsp; API routes provide a solution to build your API with Next.js.

- [How i make secret credentials in nextjs ?](https://blog.logrocket.com/nextauth-js-for-next-js-client-side-authentication/#creating-a-google-oauth-app) &nbsp;:&nbsp; use " .env.local "
>  not complete ...

6.) &nbsp; Routing Handle
- [How I click  logo and then it take me to the other Page in nextjs ?](https://nextjs.org/docs/routing/introduction) &nbsp;:&nbsp; use Dynamic Route Next.js > Imperatively

<br/><br/><br/>


# Basics :
**1.) &nbsp;Setting  Environment**

-   Create new project &nbsp;:&nbsp; [command to create react project with next.js](https://nextjs.org/docs/getting-started) &nbsp; ``` yarn create next-app [your project name] ```
-   Try to edit project ,then run to see the result 
    &nbsp;:&nbsp; you can edit in &nbsp;" app.js "&nbsp; file and then [run with this command](https://nextjs.org/docs/getting-started) &nbsp; ``` yarn dev ```
-   Setting up tailwind &nbsp;: 

    >   1.) &nbsp;Installation &nbsp;:&nbsp; [command to install tailwind](https://tailwindcss.com/docs/installation) &nbsp; ``` yarn add -D tailwindcss ```<br/>
    >   2.) &nbsp;Add the paths in tailwind.config.js file. &nbsp; [see more how to config ?](https://tailwindcss.com/docs/installation)<br/> 
    >   3.) &nbsp;Start using Tailwind ! &nbsp; [see more how to use tailwind ?](https://tailwindcss.com/docs/installation)<br/> 

  **2.) &nbsp;Tools** 
-   Basics React 
    >   **What is React ?** &nbsp;:&nbsp; React.js is an JavaScript library developed by Facebook. It’s used for building web applications quickly. <br/><br/><br/>
    >   **The main core of React** <br/>
    >   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1.)&nbsp; [**Components**](https://legacy.reactjs.org/docs/react-component.html)<br/>
    >   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1.)&nbsp; [**Props**](https://legacy.reactjs.org/docs/components-and-props.html)<br/>
    >   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1.)&nbsp; [**State**](https://legacy.reactjs.org/docs/state-and-lifecycle.html)<br/>
    >   <br/><br/>
    >   **How to use React with next.js ?** &nbsp;:&nbsp; After you create a project, you will get a project directory. Now let's figure out what each file and folder  means and does.      
    >   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1.)&nbsp; **[node_modules](https://www.freecodecamp.org/news/get-started-with-react-for-beginners/)** &nbsp;:&nbsp; contains all of our dependencies.<br/>
    >   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2.)&nbsp; **[public](https://nextjs.org/docs/basic-features/static-file-serving)** &nbsp;:&nbsp; this folder is store static files, like images.<br/>
    >   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3.)&nbsp; **[src](https://nextjs.org/docs/advanced-features/src-directory)** &nbsp;:&nbsp; This is a ***development area !!!*** <br/>
    >   - src/app &nbsp;:&nbsp; This folder contain all about " Pages Components ".
    >   - src/pages &nbsp;:&nbsp; 
    >     > * src/pages/api &nbsp;:&nbsp; This folder contain " API Config files ".<br/> 
    >     > * src/pages/__app.js_ &nbsp;:&nbsp; It's a " Global config ".<br/>
    >     > * src/pages/index.js &nbsp;:&nbsp; This folder that takes components to paste.It's like a " Home Page ".<br/>
    >     > * src/pages/components &nbsp;:&nbsp; Most developers create this folder to store all their " Components " in one place.<br/>
    >     > * src/pages/slices &nbsp;:&nbsp; This folder store redux-store code
    >   - src/styles &nbsp;:&nbsp; [It's built-in css support by next.js](https://nextjs.org/docs/basic-features/built-in-css-support).<br/><br/>  
    >     
    >   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4.)&nbsp; **[.gitignore](https://www.freecodecamp.org/news/get-started-with-react-for-beginners/)** &nbsp;:&nbsp;  It's a file that is not actually tracked by the source control, such as [.env file](https://blog.bitsrc.io/a-gentle-introduction-to-env-files-9ad424cc5ff4). <br/>
    >   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5.)&nbsp; **[package.json](https://dev.to/codergirl1991/what-is-create-react-app-part-2-packagejsonreadme-nodemodules-1bh9)** &nbsp;:&nbsp; store information such as name, author and version  as well as starter scripts and dependencies  used in the project. It's config file with json.<br/>
    >   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5.)&nbsp; **[package-log.json](https://docs.npmjs.com/cli/v9/configuring-npm/package-lock-json) or [yarn.lock](https://classic.yarnpkg.com/lang/en/docs/yarn-lock/)** &nbsp;:&nbsp; In order to get consistent installs across machines, Package manager needs to store exactly which versions of each dependency were installed. <br/>
    
    <br/>
-   Basics Redux 
    >  comming soon ...

    <br/>
-   Basic OAuth
    >  comming soon ...
   
   
<br/><br/><br/>
# Termonalogy in React
  1.) Navigation / Route

  2.) Destructuring

  3.) Immutable 

  4.) Dependency

  5.) rendering

  6.) server side rendering

  7.) source control

  8.) git repository / git remote

  9.) OAuth

  10.) Authentication Providers

  11.) Autherized vs Authentication
  
  12.) Redux
  
  13.) Hook
    









