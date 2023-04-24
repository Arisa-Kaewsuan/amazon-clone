
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

7.) &nbsp; Make Checkout Page
- [Add image](https://nextjs.org/docs/api-reference/next/image) : If you are using a version of Next.js prior to 13, you'll want to use the next/legacy/image <br/>
- Make cart system 
  > - [How i make cart system in next js ?](https://www.google.com/search?q=how+i+make+cart+system+in+next+js&sxsrf=APwXEdf09VwORenkNP6VCU9tynp_2_gwWg%3A1682328842381&ei=Ck1GZOroFoyUseMP0vmFmAU&oq=how+i+make+cart+system+in+next&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQARgAMgUIIRCgATIFCCEQoAE6BwgjEOoCECc6BAgjECc6CwgAEIAEELEDEIMBOgsILhCDARCxAxCABDoOCC4QgAQQsQMQxwEQ0QM6BQguEIAEOgsIABCKBRCxAxCDAToFCAAQgAQ6CAgAEIAEELEDOggILhCABBDUAjoICAAQgAQQywE6CAguEIAEEMsBOgsILhCABBDUAhDLAToGCAAQFhAeOggIIRAWEB4QHToKCCEQFhAeEA8QHToLCCEQFhAeEB0QiwM6BwghEKABEAo6CAghEKABEIsDSgQIQRgAUABYo1Zg3GNoAnABeAKAAY8IiAGxRJIBEDAuMTcuNC4yLjQuMi4xLjGYAQCgAQGwAQq4AQLAAQE&sclient=gws-wiz-serp) <br/>
  >  - [How i do crud in client next js ?](https://www.google.com/search?q=how+i+do+crud+in+client+next+js&sxsrf=APwXEdfou06ghjrY4c1TvG0TkfXpg23R9w%3A1682329508032&ei=pE9GZOfMAcubseMPt8S14AU&oq=how+i+do+CRUD+in+client+&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQARgAMgUIIRCgATIFCCEQoAEyBQghEKABOgcIIxDqAhAnOgQIIxAnOgsIABCABBCxAxCDAToLCC4QgAQQsQMQgwE6BQguEIAEOgsIABCKBRCxAxCDAToOCC4QgAQQsQMQxwEQ0QM6CwguEIMBELEDEIAEOggIABCABBCxAzoFCAAQgAQ6CAguEIAEENQCOggIABCABBDLAToICC4QgAQQywE6CwguEIAEENQCEMsBOgYIABAWEB46CAgAEBYQHhAPOgoIABAWEB4QDxAKOggIIRCgARCLAzoNCCEQFhAeEA8QHRCLAzoLCCEQFhAeEB0QiwM6CAghEBYQHhAdOgoIIRAWEB4QDxAdOgcIIRCgARAKOgoIIRCgARAKEIsDSgQIQRgAUNmLA1jGjARgu5oEaAdwAXgAgAH_AYgB9BmSAQY1LjIwLjKYAQCgAQGwAQq4AQLAAQE&sclient=gws-wiz-serp) : use [Redux](https://redux.js.org/tutorials/quick-start) because client server rendering make  user can quickly view the website. You can find out below to look " How to use Redux ? " in Basic Redux title.<br/>
  
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
    >   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5.)&nbsp; **[package-log.json](https://docs.npmjs.com/cli/v9/configuring-npm/package-lock-json) or [yarn.lock](https://classic.yarnpkg.com/lang/en/docs/yarn-lock/)** &nbsp;:&nbsp; In order to get consistent installs across machines, Package manager needs to store exactly which versions of each dependency were installed. <br/><br/><br/>
    > **Recap Terminologies :** <br/>
    >    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1.) Navigation / Route <br/>
    >    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2.) Destructuring <br/>
    >    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3.) Immutable / Mutable <br/>
    >    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4.) Dependency &nbsp;=&nbsp; Package <br/>
    >    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5.) Rendering &nbsp;=&nbsp; Display <br/>
    >    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 6.) Source Control &nbsp;=&nbsp; Version Control [ like github, gitlab . . .] <br/>
    >    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 7.) Git remote / remote &nbsp;=&nbsp; Git repository on website <br/>
    >    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 8.) Implement &nbsp;=&nbsp; Use
     
    <br/>
-   Basics Redux 
    >  **What is redux ?** &nbsp;:&nbsp; it is global store in your app . <br/><br/><br/>
    >  **What redux do ? - Example** &nbsp;:&nbsp; when we click add product to the basket (push some information into basket) . It gonna store the item in some kind of global store that the app can pull information from that . <br/><br/><br/>
    >  **How to use Redux ?** &nbsp;:&nbsp; <br/>
    >    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1.)&nbsp; Create store <br/>
    >    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2.)&nbsp; Create slice <br/>
    
             2.1)  Add action inside reducer:{...} object   
             2.2)  Example actions such as . . .
             2.3)  fetch data to save in store (paylooad) 
             2.4)  remove information in store  
             2.5)  Export selectItem    
            
    >   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3.)&nbsp; In the page that wants to send information to the store &nbsp;:&nbsp; use " dispatch(action) "<br/>
    >   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4.)&nbsp; In the page that wants to fetch information from the store to use &nbsp;:&nbsp;  use " useSelector " <br/><br/><br/>
    >  **Recap Terminologies :**<br/>
    >    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1.) reducer <br/>
    >    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2.) action <br/>
    >    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3.) dispatching <br/>
    >    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4.) useSelector <br/>
    >    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5.) action.payload <br/>
    >    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 6.) handy hook <br/>

    <br/>
-   Basic OAuth
    >  **Recap Terminologies :**<br/>
    >    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1.) OAuth <br/>
    >    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2.) Provider <br/>
    >    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3.) Autherize vs Authentication <br/>
    >    Not complete . . .
  
   
   
