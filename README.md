# Company_Marketplace
This will be a marketplace for listing companys for sale

---

## **📄 Instructions for Navigating and Using the Project**  

### **1. Creating a Profile/User**  
- Press **Login / Register** in the header.  
- Fill in your **email** and **password**.  
- Press **Sign Up**.  
- A **confirmation email** will be sent to the provided address.  
- Confirm your email and enjoy.  

### **2. Logged-In User**  
- You can now press **Login / Register** again to be redirected to your **profile**.  
- The **user card** will show who is logged in.  
- The **"Sell Your Company"** button and **Logout** option will now be visible.  
- Next to the card is the start of what was meant to become the **dashboard**.  

### **3. Logging Out**  
- Once logged out, you will no longer see your **profile** and can only browse the **landing page**.  

---

## **💬 Comments**  
This was a fun project to work on, and I enjoyed the **5-day deadline**. Most of the tools used to build this full-stack app were new to me. I was already familiar with **React, TypeScript, Tailwind CSS, Fetch API**, and **deploying a website**, but everything else was a **first-time experience**.  

It has been a **great learning opportunity** and has motivated me to explore these **methods** further for future projects. This project has also **ignited a couple of ideas** that I plan to pursue in the future.  

Below, you can see the **project requirements** and their completion status:  

✅ = **Finished**  
🟥 = **Started or Not Done**  

---

## **📌 Requirements**
✅ **Use Next.js 15** (App Router & Server Actions).  
✅ **Use Supabase** (Authentication & Database).  
✅ **Use TailwindCSS + ShadCN/UI** for styling.  
✅ **Deploy the project on Vercel**.  
✅ **Provide clear documentation** in the README file.  

---

## **📌 Scope of the Task**
### ** 1 User Authentication (Supabase Auth)**
✅ Implement **Supabase authentication**.  
✅ Users should be able to **sign up, log in, and log out**.  
🟥 **Restrict actions** like buying or selling to logged-in users. (In progress) 
✅ **Guests can only browse** company listings.  

### ** 2 Company Listings**
✅ Fetch & display a **list of companies**.  
✅ Use a **dummy API** (`DummyJSON`, `Fake Store API`, or a mock JSON file).  
🟥 Each listing must include:  (In progress)
  - **Company name**  
  - **Description**  
  - **Price**  
  - **Industry type**  
  - **Image**  
  - **Seller information**  
🟥 **Implement Search & Filters** (by **price, industry, and keywords**).  (In progress)

### ** 3 Selling a Company**
🟥 **Logged-in users** should be able to list a company for sale.  (In progress)
🟥 **Listings must be stored in Supabase**.  (In progress)
🟥 Listings should be displayed on the **marketplace**.  (In Progress)

### ** 4 Expressing Interest in a Company**
🟥 **Logged-in users** should be able to express interest in a company.  (In progress)
🟥 **Sellers should see a list of interested buyers**.  (In progress)
🟥 **Store interests in a separate Supabase table**.  (In progress)

### ** 5 UI & Styling**
✅ Use **TailwindCSS** + **ShadCN/UI** for a **modern & responsive UI**.  
✅ Ensure **good user experience** with:  
  - **Form validation**  
  - **Feedback messages**  
✅ Maintain a **consistent & professional design**.  

### ** 6 Deployment on Vercel**
✅ **Deploy the final project on Vercel**.  
