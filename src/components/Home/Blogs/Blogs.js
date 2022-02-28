// import { Typography, Container } from '@mui/material';
import React from 'react';

const Blogs = () => {
    return (
        <div >
       {/*  <Container>
        <Typography variant="h6" style={{fontSize: '28px', paddingTop: "40px", textAlign: "center", color: 'red'}} gutterBottom component="div">
         Blog Name: React Basic Concepts
        </Typography>
        <Typography>
        What other hooks have you used other than useState and useEffect? <br></br><br></br>
        Ans: useEffect and use state is the primary hook of reacting. React also give opportunities to make custom hook. Custom hook mainly helps to DRY(do not repeat yourself). I also use some packages hooks. From the react-router-dom, I use useLocation for push location, useHistory to find route history and useParams for dynamic routing.   

        ইউজ ইফেক্ট এবং ইউজ স্টেট হল প্রতিক্রিয়ার প্রাথমিক হুক। প্রতিক্রিয়াও কাস্টম হুক তৈরি করার সুযোগ দেয়। কাস্টম হুক প্রধানত DRY করতে সাহায্য করে (নিজেকে পুনরাবৃত্তি করবেন না)। আমি কিছু প্যাকেজ হুক ব্যবহার করি। রিঅ্যাক্ট-রাউটার-ডম থেকে, আমি পুশ লোকেশনের জন্য useLocation ব্যবহার করি, রুট হিস্ট্রি খুঁজতে UseHistory এবং ডাইনামিক রাউটিং-এর জন্য Params ব্যবহার করি।
           <br></br> <br></br><br></br>
        what is the purpose of a custom hook? <br></br><br></br>
        Ans: The custom hook is a js file module created by the developer and behaves like react hook. It is used when the programmer needs to use a part that in multi-level many files. It makes a short module and helps to implement the DRY concept. “Use” keyword used at first to define hooks. Example: [ const , property  = useHook() ] .

        কাস্টম হুক হল একটি js ফাইল মডিউল যা ডেভেলপার দ্বারা তৈরি করা হয়েছে এবং প্রতিক্রিয়া হুকের মত আচরণ করে। এটি ব্যবহার করা হয় যখন প্রোগ্রামারকে একটি অংশ ব্যবহার করতে হয় যা বহু-স্তরের অনেক ফাইলে। এটি একটি ছোট মডিউল তৈরি করে এবং DRY ধারণাটি বাস্তবায়ন করতে সহায়তা করে। হুক সংজ্ঞায়িত করতে প্রথমে ব্যবহৃত "ব্যবহার করুন" কীওয়ার্ড। উদাহরণ: [ const  , property = useHook() ]
        <br></br><br></br>

        Differentiate between stateful and stateless components?<br></br><br></br>
        Ans: stateful component is which component has states. The stateless component is which components don’t need to add states. When components need to add the functionality they use state. The stateful component is a dynamic component that can be updated cause the state can vary. But the stateless component is just like a static component. 

        স্টেটফুল কম্পোনেন্ট হল কোন কম্পোনেন্টের স্টেট আছে। স্টেটলেস কম্পোনেন্ট হল কোন কম্পোনেন্টে স্টেট যোগ করার দরকার নেই। যখন উপাদানগুলির কার্যকারিতা যোগ করার প্রয়োজন হয় তখন তারা রাষ্ট্র ব্যবহার করে। স্টেটফুল কম্পোনেন্ট হল একটি ডাইনামিক কম্পোনেন্ট যা আপডেট করা যেতে পারে কারণ স্টেট পরিবর্তিত হতে পারে। কিন্তু স্টেটলেস কম্পোনেন্ট একটা স্ট্যাটিক কম্পোনেন্টের মত।
        <br></br><br></br>
        What is prop drilling?<br></br><br></br>
        Ans: React is a module nesting behavior library. Sometimes react needs to send functions or elements a component to another. The easy way is prop drilling to send data Parent to child component. Data pass from parent component as property. Data is useable from child component function parameters by destructuring.
        <br></br>
        প্রতিক্রিয়া একটি মডিউল নেস্টিং আচরণ লাইব্রেরি. কখনও কখনও প্রতিক্রিয়া ফাংশন বা উপাদান অন্য একটি উপাদান পাঠাতে প্রয়োজন. সহজ উপায় হল প্রপ ড্রিলিং ডেটা প্যারেন্টকে চাইল্ড কম্পোনেন্টে পাঠানোর। সম্পত্তি হিসাবে পিতামাতার উপাদান থেকে ডেটা পাস। শিশু উপাদান ফাংশন পরামিতি থেকে ডেটা ধ্বংস করে ব্যবহারযোগ্য।
        <br></br>
        Prop drilling is the process in a React app where props are passed from one part of a tree to another by going through other parts that do not need the data, but only help in passing it through the tree.

        প্রপ ড্রিলিং হল একটি রিঅ্যাক্ট অ্যাপের প্রক্রিয়া যেখানে প্রপস একটি গাছের এক অংশ থেকে অন্য অংশে পাঠানো হয় যেগুলির ডেটার প্রয়োজন হয় না, তবে শুধুমাত্র গাছের মধ্য দিয়ে যেতে সাহায্য করে।
        <br></br><br></br>
        What is virtual dom? <br></br><br></br>
        Ans: Virtual dom is a replica of the main dom. From a browser, dom React copies all nodes and creates a virtual dom to find changes of the previous dom by diff algorithm. After finding the changes react only update this node. But browser dom needs to update the full dom tree for adding changes node. It is the main difference between browser and virtual dom.   
        <br></br>
        প্রতিক্রিয়া, প্রপস এবং স্টেটে উভয়ই প্রতিক্রিয়া উপাদান ডেটা সঞ্চয় করার জন্য কাজ করে। প্রপস হল রেস্ট প্যারামিটার অবজেক্ট স্টোর কম্পোনেন্ট প্রোপার্টি এবং প্যারেন্ট ফাংশন থেকে চাইল্ড ফাংশনে ভ্যালু পাঠানোর জন্য। রাষ্ট্র হল প্রতিক্রিয়া উপাদানের একটি পরিবর্তনশীল যা যেকোনো সময় পরিবর্তিত হতে পারে। রাষ্ট্র আদিম, অ-আদিম, এবং ফাংশন সংরক্ষণ করতে পারে।
        <br></br><br></br>
        The Virtual DOM is a light-weight abstraction of the DOM. You can think of it as a copy of the DOM, that can be updated without affecting the actual DOM. It has all the same properties as the real DOM object, but doesn't have the ability to write to the screen like the real DOM
        <br></br>

        ভার্চুয়াল DOM হল DOM-এর একটি হালকা-ওজন বিমূর্ততা। আপনি এটিকে DOM-এর একটি অনুলিপি হিসাবে ভাবতে পারেন, যা প্রকৃত DOM-কে প্রভাবিত না করেই আপডেট করা যেতে পারে। এটির আসল DOM অবজেক্টের মতো একই বৈশিষ্ট্য রয়েছে, কিন্তু বাস্তব DOM-এর মতো স্ক্রিনে লেখার ক্ষমতা নেই.
        <br></br>
        What is JSX? <br></br>
        Ans: JSX is syntax sugar for writing HTML in javaScript. JavaScript XML short form is JSX. JSX is used to writing XHTML syntax in JavaScript for optimize React application. JSX write in parenthesis to javaScript file. 
        <br></br><br></br>
        JSX হল জাভাস্ক্রিপ্টে HTML লেখার জন্য সিনট্যাক্স সুগার। জাভাস্ক্রিপ্ট XML সংক্ষিপ্ত রূপ হল JSX। JSX অপ্টিমাইজ রিঅ্যাক্ট অ্যাপ্লিকেশনের জন্য জাভাস্ক্রিপ্টে XHTML সিস্ট্যাক্স লিখতে ব্যবহৃত হয়। JSX জাভাস্ক্রিপ্ট ফাইলে প্যারেন্টেসিস লিখুন।
        <br></br>
        Tell us about react component lifecycle?<br></br>
        Ans: React has to built-in a feature to optimize speed by memory management that is react component lifecycle method. In this process, Component in Create when it needs and mount to DOM, update in the user event. unmount from dom when need is over. This is called react lifecycle. 
        <br></br><br></br>
        রিঅ্যাক্টকে মেমরি ম্যানেজমেন্টের মাধ্যমে গতিকে অপ্টিমাইজ করার জন্য একটি বৈশিষ্ট্য বিল্ট-ইন করতে হবে যা প্রতিক্রিয়া উপাদান জীবনচক্র পদ্ধতি। এই প্রক্রিয়ায়, কম্পোনেন্ট তৈরি করুন যখন প্রয়োজন হবে এবং DOM-এ মাউন্ট করুন, ব্যবহারকারী ইভেন্টে আপডেট করুন। প্রয়োজন শেষ হলে ডোম থেকে আনমাউন্ট করুন। একে বলে বিক্রিয়া জীবনচক্র।
        <br></br><br></br>
        What is a higher-order component?<br></br>
        Ans: Higher Order Component or HOC is a functional component. When need props dilling in multilevel and data pass there where not need this data. HOC is adding functionality to the Original component and returning it.  
        <br></br><br></br>
        হায়ার অর্ডার কম্পোনেন্ট বা এইচওসি একটি কার্যকরী উপাদান। যখন প্রয়োজন হবে প্রপস ডিলিং ইন মাল্টিলেভেল এবং ডেটা পাস যেখানে এই ডেটার প্রয়োজন নেই। HOC মূল উপাদানে কার্যকারিতা যোগ করছে এবং এটি ফিরিয়ে দিচ্ছে।
        <br></br><br></br>

            Explain what is the Flux?<br></br>
            Ans: Flux is a data management architecture that uses various JavaScript frameworks or libraries. It provides unidirectional data flow, Redux based on Flux to data state manage, it is mainly used to store data and create action in react-redux.  
            <br></br><br></br>
            জাভাস্ক্রিপ্টে কল স্ট্যাক হল লাইফোতে কাজ যার মানে লাস্ট ফার্স্ট আউট। রিকার্সিভ ফাংশনের সেরা উদাহরণ। জাভাস্ক্রিপ্টে প্রথমে, সমস্ত ফাংশন সংজ্ঞায়িত করা হয় এবং এটি দ্রুত কার্যকর করার পরে এটি বিনতে চলে যায়। তাই ব্লক সুযোগ ফাংশন বাইরে দেখানো অনির্ধারিত.


        </Typography>
        <Typography variant="h6" style={{fontSize: '28px', paddingTop: "40px", textAlign: "center", color: 'red'}} gutterBottom component="div">
         Blog Name: Node.js Basic Concepts
        </Typography>
        <Typography>
        What is Nodejs? 
        Node.js is not a programming language. It is an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. It is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.

        Node.js একটি প্রোগ্রামিং ভাষা নয়। এটি একটি অ্যাসিঙ্ক্রোনাস ইভেন্ট-চালিত জাভাস্ক্রিপ্ট রানটাইম, Node.js পরিমাপযোগ্য নেটওয়ার্ক অ্যাপ্লিকেশন তৈরি করার জন্য ডিজাইন করা হয়েছে। এটি একটি ওপেন সোর্স, ক্রস-প্ল্যাটফর্ম, ব্যাক-এন্ড জাভাস্ক্রিপ্ট রানটাইম পরিবেশ যা V8 ইঞ্জিনে চলে এবং ওয়েব ব্রাউজারের বাইরে জাভাস্ক্রিপ্ট কোড কার্যকর করে।
        <br></br> <br></br><br></br>
        What is jwt?<br></br><br></br>
        The JSON Web Token is a proposed Internet standard for creating data with optional signatures and / or optional encryption whose payload contains JSON which asserts a number of requirements. Tokens are signed using either a private privacy or a public / private key. 
        
        JSON ওয়েব টোকেন হল ঐচ্ছিক স্বাক্ষর এবং/অথবা ঐচ্ছিক এনক্রিপশন সহ ডেটা তৈরি করার জন্য একটি প্রস্তাবিত ইন্টারনেট স্ট্যান্ডার্ড যার পেলোডে JSON রয়েছে যা অনেকগুলি প্রয়োজনীয়তা জাহির করে। টোকেনগুলি হয় একটি ব্যক্তিগত গোপনীয়তা বা একটি সর্বজনীন/প্রাইভেট কী ব্যবহার করে স্বাক্ষরিত হয়।

       <br></br><br></br>

       What is crud operation?<br></br><br></br>
        In computer programming, create, read, update, and delete are the four basic operations of persistent storage. CRUD is also sometimes used to describe user interface conventions that facilitate viewing, searching, and changing information using computer-based forms and reports.

        কম্পিউটার প্রোগ্রামিং-এ, ক্রিয়েট, রিড, আপডেট এবং ডিলিট হল ক্রমাগত স্টোরেজের চারটি মৌলিক কাজ। CRUD কখনও কখনও ব্যবহারকারী ইন্টারফেস কনভেনশনগুলি বর্ণনা করতে ব্যবহৃত হয় যা কম্পিউটার-ভিত্তিক ফর্ম এবং প্রতিবেদনগুলি ব্যবহার করে তথ্য দেখা, অনুসন্ধান এবং পরিবর্তন করতে সহায়তা করে।

        <br></br><br></br>
        What is express.js?<br></br><br></br>
        Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. APIs.

        এক্সপ্রেস হল একটি ন্যূনতম এবং নমনীয় Node.js ওয়েব অ্যাপ্লিকেশন ফ্রেমওয়ার্ক যা ওয়েব এবং মোবাইল অ্যাপ্লিকেশনগুলির জন্য বৈশিষ্ট্যগুলির একটি শক্তিশালী সেট প্রদান করে। এপিআই । 
        <br></br>
       

        </Typography>
        </Container> */}
         <h1 style={{color: 'red', textAlign:"center"}}> Blogs Coming soon!!</h1>
        </div>
    );
};

export default Blogs;