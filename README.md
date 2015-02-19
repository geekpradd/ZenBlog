##ZenBlog: A Minimal Blog System Meant For Hackers

ZenBlog is a very minimal blog system built on AngularJS. ZenBlog is not meant for replacing Ghost, Jekyll or Wordpress. It serves a different purpose and it is completely client side.

What purpose you'll ask? Well ZenBlog is meant for use in webapps as a news supplement. Many web products have a 'news' section or a blog. Most of the time, this "blog" looks way different than the normal site. ZenBlog fits in here. You use the same CSS and layout as your other files except that you have some AngularJS directives in your HTML. ZenBlog looks for a posts.xml file and renders your blog.

There are reasons for using xml. To make a new post, you edit the xml file providing necessary data through tags. This means that there is no need for a database and no need for a back end (server) language. Everything is done using Javascript.

Due to this XML requirment, ZenBlog is very clumsy when you are embedding videos or images or code. What it is incredibly useful for though, is writing short posts discussing some changes in your product. ZenBlog is incredibly easy to implement and you don't need to use a CMS. Any change you want to make, make it yourself in the HTML and Javascript code.

###How To Use

Now, usage of this system can be done in many ways. You just need to include the core angular code located in `script.js`. Also xml2json.min.js should be present and the AngularJS js file and angular route js files loaded using googleapis. 

For templating, look at the index.html file located in the repo. There is a config.js file that will include the Blog name and Blog tagline. The name declared in config.js SHOULD be equal to the ng-app attribute of the index.html file.

This repo will have two dev branches: The first branch will contain a minimum implementaion of the system and the second will use Bootstrap for a blog system.

More instructions on how to install are coming soon.

Also, a PHP repo to create the XML file from `.md` markdown files is also coming. This will help in creating more serious blogs if you have PHP enabled on your server.

###Demo 
Check out this demo : http://geekpradd.github.io/ZenBlog/#/