import{_ as m,r as u,o as c,c as g,a as e,w as b,b as o,v as l,j as f,e as d,f as h,g as p}from"./index-9da031ae.js";const x={data(){return{name:"",email:"",password:"",confirmPassword:"",agreeTerms:!1}},methods:{registerUser(){if(!this.name||!this.email||!this.password||!this.confirmPassword||!this.agreeTerms){alert("Please fill in all fields");return}if(this.name.length>20){alert("Name must not exceed 20 characters");return}if(!this.validateEmail(this.email)){alert("Invalid email format");return}if(this.password!==this.confirmPassword){alert("Passwords do not match");return}fetch("http://localhost:8080/graphql",{method:"POST",body:JSON.stringify({query:`mutation {
            insertUser(nickname: "${this.name}", email: "${this.email}", password: "${this.password}") {
              id
              role_id
              nickname
              email
            }
          }`})}).then(a=>a.json()).then(a=>{alert("註冊成功"),this.$router.push({name:"Login"})}).catch(a=>{console.error("新增註冊資料發生錯誤:",a)})},validateEmail(a){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a)}}},k={class:"bg-gray-50 dark:bg-gray-900"},y={class:"flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"},w=e("a",{href:"#",class:"flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"},[e("img",{class:"w-8 h-8 mr-2",src:"https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg",alt:"logo"}),d(" Vue + Tailwind ")],-1),_={class:"w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"},v={class:"p-6 space-y-4 md:space-y-6 sm:p-8"},P=e("h1",{class:"text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"}," Create a Free Account ",-1),T=e("label",{for:"name",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"姓名",-1),U=e("label",{for:"email",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Email 帳號",-1),V=e("label",{for:"password",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"密碼",-1),q=e("label",{for:"confirmPassword",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"}," 密碼確認 ",-1),N={class:"flex items-start"},C={class:"flex items-center h-5"},E=e("div",{class:"ml-3 text-sm"},[e("label",{for:"agreeTerms",class:"text-gray-500 dark:text-gray-300"},"I agree to the terms and conditions")],-1),j=e("button",{type:"submit",class:"w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"}," 註冊",-1),B={class:"text-sm font-light text-gray-500 dark:text-gray-400"};function M(a,r,S,I,s,i){const n=u("router-link");return c(),g("div",null,[e("section",k,[e("div",y,[w,e("div",_,[e("div",v,[P,e("form",{class:"space-y-4 md:space-y-6",onSubmit:r[5]||(r[5]=b((...t)=>i.registerUser&&i.registerUser(...t),["prevent"]))},[e("div",null,[T,o(e("input",{type:"text",name:"name",id:"name",placeholder:"","onUpdate:modelValue":r[0]||(r[0]=t=>s.name=t),class:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:"",maxlength:"20"},null,512),[[l,s.name]])]),e("div",null,[U,o(e("input",{type:"email",name:"email",id:"email",placeholder:"","onUpdate:modelValue":r[1]||(r[1]=t=>s.email=t),class:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:""},null,512),[[l,s.email]])]),e("div",null,[V,o(e("input",{type:"password",name:"password",id:"password",placeholder:"","onUpdate:modelValue":r[2]||(r[2]=t=>s.password=t),class:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:""},null,512),[[l,s.password]])]),e("div",null,[q,o(e("input",{type:"password",name:"password",id:"confirmPassword",placeholder:"","onUpdate:modelValue":r[3]||(r[3]=t=>s.confirmPassword=t),class:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:""},null,512),[[l,s.confirmPassword]])]),e("div",N,[e("div",C,[o(e("input",{id:"agreeTerms","aria-describedby":"agreeTerms",type:"checkbox","onUpdate:modelValue":r[4]||(r[4]=t=>s.agreeTerms=t),class:"w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800",required:""},null,512),[[f,s.agreeTerms]])]),E]),j,e("p",B,[d(" 已經註冊? "),h(n,{class:"font-medium text-blue-600 hover:underline dark:text-blue-500",to:{name:"Login"}},{default:p(()=>[d("回登入頁")]),_:1})])],32)])])])])])}const O=m(x,[["render",M]]);export{O as default};
