import{_ as c,o as u,c as p,a as s,w as d,v as l,b as m}from"./index-f2e24bfa.js";const h={data(){return{user:{username:"",password:""}}},methods:{signIn(){const n="https://vue3-course-api.hexschool.io/admin/signin";this.$http.post(n,this.user).then(e=>{if(this.user.username="",this.user.password="",e.data.success){const{token:r,expired:i}=e.data;document.cookie=`hexToken=${r}; expires=${new Date(i)}`,this.$router.push("/")}else alert(e.data.message)})}}},_={class:"container mt-5"},f={class:"col-md-6"},w=s("h1",{class:"h3 mb-3 font-weight-normal"},"請先登入",-1),b={class:"mb-2"},v=s("label",{for:"inputEmail",class:"sr-only"},"Email address",-1),x={class:"mb-2"},g=s("label",{for:"inputPassword",class:"sr-only"},"Password",-1),y=s("div",{class:"text-end mt-4"},[s("button",{class:"btn btn-lg btn-primary btn-block",type:"submit"},"登入")],-1);function k(n,e,r,i,o,a){return u(),p("div",_,[s("form",{class:"row justify-content-center",onSubmit:e[2]||(e[2]=m((...t)=>a.signIn&&a.signIn(...t),["prevent"]))},[s("div",f,[w,s("div",b,[v,d(s("input",{type:"email",id:"inputEmail",class:"form-control",placeholder:"Email address",required:"",autofocus:"","onUpdate:modelValue":e[0]||(e[0]=t=>o.user.username=t)},null,512),[[l,o.user.username]])]),s("div",x,[g,d(s("input",{type:"password",id:"inputPassword",class:"form-control",placeholder:"Password",required:"","onUpdate:modelValue":e[1]||(e[1]=t=>o.user.password=t)},null,512),[[l,o.user.password]])]),y])],32)])}const P=c(h,[["render",k]]);export{P as default};