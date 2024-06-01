# react-router setup

- routes
- MainLayout
- Errorpage
- components/shared/navber+footer
- advanced routing

# Types of fetching

- fetching-1: inside useEffect by fetch.then.then [path:**_src\components\homePage\OurProducts.jsx_**]
- fetching-2: inside useEffect by async-await+fetch [path:**_src\pages\Products.jsx_**]
- fetching-3: inside useEffect by async-await+axios [path:**_src\pages\dashboard\AddProducts.jsx_**]

# axios CRUD

- follow all dashboard pages

# buggs to fix

- আমরা যখন user কে firebase এ login / register এর সাথে সাথে DB এ save করছি সেখানে **_if (userInfo)_** condition use করার ফলে যত বার login করছি ঠিক ততবারই এখানে user এর data DB তে saved হবার চেষ্টা করছে
- github login এর সময় আমরা email পাঠাচ্ছি না তাই DB তে **_email: null_** save হচ্ছে আর Profile Edit করতে পারছি না কারন email দিয়েই ত routing করা
