import Head from "next/head";
import 'bootstrap/dist/css/bootstrap.css';

const About =() =>{


   


return(

    <>
    <Head>
        <title> STORE | About Us </title>
        <meta name='description' content='ecommerce store'></meta>


    </Head><div className='container mt-2'>

            <h1 className="text-center">about</h1>
            <div class="container overflow-hidden ">
  <div class="row gx-5">
    <div class="col">
   
     <h2 className="mt-4 text-secondary" >What is Lorem Ipsum?</h2>
     <p className="mt-5">
<span className="fw-bold fs-2">Lorem Ipsum </span>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum </p>
    </div>
    <div class="col">
      <div class=" mega"><img src="/megamenu.png" ></img></div>
    </div>
  </div>
</div>

           



 </div>
</>
    

)

};
export default About;

