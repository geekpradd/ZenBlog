## ZenBlog: A Minimal Blog System 

ZenBlog is a very minimal blog system built on AngularJS. ZenBlog is not meant for replacing Ghost, Jekyll or Wordpress. It serves a different purpose and it is completely client side.

What purpose you'll ask? Well ZenBlog is meant for use in webapps as a news supplement. Many web products have a 'news' section or a blog. Most of the time, this "blog" looks way different than the normal site. ZenBlog fits in here. You use the same CSS and layout as your other files except that you have some AngularJS directives in your HTML. ZenBlog looks for a posts.xml file and renders your blog.

There are reasons for using xml. To make a new post, you edit the xml file providing necessary data through tags. This means that there is no need for a database and no need for a back end (server) language. Everything is done using Javascript.

Due to this XML requirment, ZenBlog is very clumsy when you are embedding videos or images or code. What it is incredibly useful for though, is writing short posts discussing some changes in your product. ZenBlog is incredibly easy to implement and you don't need to use a CMS. Any change you want to make, make it yourself in the HTML and Javascript code.

### How To Use

Firstly, download the repository contents from [this link](https://github.com/geekpradd/ZenBlog/archive/master.zip) and extract the zip to your developent environment.

Or you can clone the repo using git

```
git clone https://github.com/geekpradd/ZenBlog.git
```
Once the repo has been successfully downloaded and setup, open `config.js`. In this file you need to modify the `BLOG_NAME` and `BLOG_MOTTO` variables to suit your needs.

Now that the Blog names have been set, open `posts.xml`. Demo data has already been entered in this XML file and all you need to do is change the data with your own posts. 

You can change the styling of the main page by changing the CSS if you want to and you can easily integrate this with your own website (Just change the CSS).

### Demo 
Check out this demo : http://geekpradd.github.io/ZenBlog/#/

### About

Created By Pradipta. Copyright 2015. MIT Licensed.
