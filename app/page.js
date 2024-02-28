"use client";
import Image from "next/image";
import { BeamComponent } from "./components/BeamComponent";
import { Spotlight } from "./components/ui/Spotlight";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../animations/shippingtwo.json";

// components/BackgroundVideo.js

export const BackgroundVideo = () => {
  return (
    <div style={styles.videoContainer}>
      <video style={styles.video} autoPlay loop muted>
        <source src="./video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

const styles = {
  videoContainer: {
    position: "fixed",
    right: "0",
    bottom: "0",
    minWidth: "100%",
    minHeight: "100%",
    zIndex: "-1", // Ensure video is behind other content
  },
  video: {
    width: "100%",
    height: "100vh",
    objectFit: "cover", // Cover the entire page
  },
};

export default function Home() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [message, setMessage] = useState({
    nombre: "",
    instagram: "",
    celular: "",
    paisDestino: "",
    ciudadDestino: "",
    producto: "",
  });

  const generateWhatsAppLink = () => {
    const mensaje = `Hola, mi nombre es ${message.nombre}, mi celular es ${message.celular}, mi instagram es ${message.instagram}. Estoy interesado(a) en enviar un(a) ${message.producto} a ${message.paisDestino}, ${message.ciudadDestino}. Por favor, ¿podrían proporcionarme más información?`;
    const encodedMessage = encodeURIComponent(mensaje);
    const whatsappUrl = `https://wa.me/+5491130042170?text=${encodedMessage}`;

    window.location.href = whatsappUrl;
  };

  const redirectToTrackingPage = () => {
    let url;

    if (trackingNumber.length === 10) {
      // Código para DHL
      url = `https://www.dhl.com/ar-es/home/tracking/tracking-ecommerce.html?submit=1&tracking-id=${trackingNumber}`;
    } else if (trackingNumber.length === 12) {
      // Código para FedEx
      url = `https://www.fedex.com/wtrk/track/?action=track&tracknumbers=${trackingNumber}&locale=es_ar&cntry_code=ar`;
    } else {
      alert("Ingrese un código de seguimiento válido.");
      return;
    }

    window.location.href = url; // Redirecciona al usuario usando el objeto window
  };

  return (
    <main className="flex min-h-screen bg-black/70  flex-col items-center justify-between ">
      <BackgroundVideo />
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="#a85cfc"
      />
      <section className="mb-20">
        <div className="w-full flex fixed  right-1 top-1 justify-end mr-5  mt-5">
          <div
            style={{
              backdropFilter: "blur(4px)",
              background: "rgba(0,0,0,0.5)",
            }}
            className="w-fit  hover:animate-pulsing  rounded-full mx-2 cursor-pointer border-white  p-2 border-2"
          >
            <a href="https://wa.me/+5491130042170">
              <svg
                width={30}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#f5f5f7"
                  fillRule="evenodd"
                  d="M3.5 12a8.5 8.5 0 118.5 8.5 8.455 8.455 0 01-4.542-1.314 1 1 0 00-.821-.113l-2.88.859 1.085-2.537a1 1 0 00-.07-.92A8.456 8.456 0 013.5 12zM12 1.5C6.201 1.5 1.5 6.201 1.5 12c0 1.838.473 3.568 1.305 5.073L1.08 21.107a1 1 0 001.206 1.351l4.5-1.342A10.456 10.456 0 0012 22.5c5.799 0 10.5-4.701 10.5-10.5S17.799 1.5 12 1.5zm2.293 12.682l-1.315.926A9.338 9.338 0 0111 13.585a10.202 10.202 0 01-1.624-2.114l.835-.709a1 1 0 00.236-1.232l-1.064-2a1 1 0 00-1.54-.283l-.316.275c-.759.662-1.208 1.75-.836 2.852A12.049 12.049 0 009.586 15c1.813 1.813 3.655 2.527 4.733 2.805.868.223 1.689-.076 2.268-.548l.591-.482a1 1 0 00-.12-1.634l-1.678-1a1 1 0 00-1.088.041z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
          <div
            style={{
              backdropFilter: "blur(4px)",
              background: "rgba(0,0,0,0.5)",
            }}
            className="w-fit  hover:animate-pulsing  rounded-full mx-2 cursor-pointer border-white  p-2 border-2"
          >
            <a href="https://www.instagram.com/ecapital.ar/">
              <svg
                width={30}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <g>
                  <g
                    fill="none"
                    fillRule="evenodd"
                    stroke="none"
                    strokeWidth="1"
                  >
                    <g fill="#f5f5f7" transform="translate(-340 -7439)">
                      <g transform="translate(56 160)">
                        <path d="M289.87 7279.123c-1.628.073-3.04.471-4.179 1.606-1.143 1.14-1.536 2.557-1.61 4.168-.045 1.005-.313 8.601.463 10.593a5.04 5.04 0 002.91 2.903c.634.246 1.356.412 2.416.461 8.86.401 12.145.183 13.53-3.364.246-.631.415-1.353.462-2.41.405-8.883-.066-10.809-1.61-12.351-1.225-1.222-2.666-2.054-12.382-1.606m.081 17.944c-.97-.043-1.496-.205-1.848-.341a3.255 3.255 0 01-1.888-1.883c-.591-1.514-.395-8.703-.342-9.866.051-1.14.282-2.18 1.086-2.985.995-.992 2.28-1.479 11.034-1.084 1.142.052 2.186.282 2.992 1.084.995.993 1.489 2.288 1.087 11.008-.044.968-.206 1.493-.342 1.843-.901 2.308-2.973 2.628-11.779 2.224m8.139-13.377c0 .657.534 1.19 1.194 1.19.66 0 1.195-.533 1.195-1.19a1.194 1.194 0 00-2.39 0m-9.226 5.298a5.103 5.103 0 005.11 5.097 5.103 5.103 0 005.109-5.097 5.102 5.102 0 00-5.11-5.096 5.102 5.102 0 00-5.11 5.096m1.794 0a3.313 3.313 0 013.316-3.308 3.313 3.313 0 013.317 3.308 3.313 3.313 0 01-3.317 3.31 3.313 3.313 0 01-3.316-3.31"></path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </a>
          </div>

          {/* <div className="w-fit rounded-full   hover:animate-pulsing mx-2 cursor-pointer border-white  p-2 border-2">
            <svg
              width={30}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              fill="#f5f5f7"
            >
              <path d="M16.656 1.029c1.637-.025 3.262-.012 4.886-.025a7.762 7.762 0 002.189 5.213l-.002-.002A8.77 8.77 0 0029 8.45l.028.002v5.036a13.327 13.327 0 01-5.331-1.247l.082.034a15.385 15.385 0 01-2.077-1.196l.052.034c-.012 3.649.012 7.298-.025 10.934a9.513 9.513 0 01-1.707 4.954l.02-.031c-1.652 2.366-4.328 3.919-7.371 4.011h-.014a9.071 9.071 0 01-5.139-1.31l.04.023C5.05 28.185 3.32 25.603 3 22.6l-.004-.041a23.163 23.163 0 01-.012-1.862c.49-4.779 4.494-8.476 9.361-8.476.547 0 1.083.047 1.604.136l-.056-.008c.025 1.849-.05 3.699-.05 5.548a4.29 4.29 0 00-5.465 2.619l-.009.03c-.133.427-.21.918-.21 1.426 0 .206.013.41.037.61l-.002-.024a4.26 4.26 0 004.382 3.586h-.009a4.198 4.198 0 003.451-1.994l.01-.018c.267-.372.45-.822.511-1.311l.001-.014c.125-2.237.075-4.461.087-6.698.012-5.036-.012-10.06.025-15.083z"></path>
            </svg>
          </div> */}
        </div>
      </section>
      <section>
        <div className="flex justify-center flex-col items-center">
          <img
            src="/logo.png"
            className="w-3/12 bg-white rounded-full md:w-1/12 mb-5"
          />
          <p
            style={{ letterSpacing: -2 }}
            className="font-sans text-5xl md:text-6xl opacity-[80%]  w-8/12 text-black font-light text-center"
          >
            <span className="text-[#f5f5f7] font-extrabold"> ¡Conectando </span>
            <span className="text-white">tu negocio con el </span>
            <span className="text-violet-400 font-extrabold"> MUNDO!</span>
          </p>
          <p className="font-sans text-md uppercase w-8/12 font-semibold  mt-10 text-[#f5f5f7]  text-center">
            Envíos internacionales rápidos y seguros para el crecimiento global
            de tu empresa.
          </p>
          <Button className="mt-5 hover:animate-pulsing text-black hover:bg-violet-400 bg-[#c4b5fd]">
            <a href="https://wa.me/+5491130042170">Conectate</a>
          </Button>
        </div>
      </section>
      <section className="w-screen flex justify-center">
        <div className="grid grid-cols-1 mt-10 md:mt-0 md:grid-cols-2 w-11/12 min-h-[40vh]  ">
          <div className="flex justify-center flex-col   mt-5 items-center   ">
            <p className="text-center  text-4xl mb-5 font-bold font-geist text-[#f5f5f7] ">
              Aliados estratégicos.
            </p>
            <div className="flex md:flex-row flex-col">
              <img
                src="/fedex.png"
                width={200}
                className="bg-violet-900 p-5 rounded-xl mx-10"
              />
              <img
                src="/dhl.svg"
                width={250}
                className="mt-5 md:mt-0 bg-yellow-400 p-5 rounded-xl mx-10"
              />
            </div>
          </div>

          <div className="flex justify-center flex-col my-10   md:my-5 items-center   ">
            <ul>
              <li>
                <div className="flex items-center">
                  <svg
                    width={50}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="mr-2"
                  >
                    <g fill="#c4b5fd">
                      <path
                        fillRule="evenodd"
                        d="M4 4.694v14a3 3 0 003 3h10a3 3 0 003-3v-10a3 3 0 00-3-3H5a1 1 0 01-1-1zm3.25 7a.75.75 0 01.75-.75h8a.75.75 0 010 1.5H8a.75.75 0 01-.75-.75zm0 3.5a.75.75 0 01.75-.75h5.5a.75.75 0 010 1.5H8a.75.75 0 01-.75-.75z"
                        clipRule="evenodd"
                      ></path>
                      <path
                        d="M18 4v1.865c-.313-.11-.65-.17-1-.17H5a1 1 0 01-1-1v-.072c0-.533.392-.985.92-1.06L15.717 2.02A2 2 0 0118 4z"
                        opacity="0.5"
                      ></path>
                    </g>
                  </svg>
                  <span className="font-mono font-bold text-2xl text-[#f5f5f7]">
                    Envio de documentación.
                  </span>
                </div>
              </li>
              <li className="mt-5">
                <div className="flex items-center">
                  <svg
                    className="mr-2"
                    width={50}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <g fill="#c4b5fd">
                      <path d="M17.578 4.432l-2-1.05C13.822 2.461 12.944 2 12 2s-1.822.46-3.578 1.382l-2 1.05c-1.773.93-2.816 1.478-3.462 2.21l9.04 4.52 9.04-4.52c-.646-.732-1.688-1.28-3.462-2.21zM21.748 7.964l-8.998 4.5v9.44c.718-.179 1.535-.607 2.828-1.286l2-1.05c2.151-1.129 3.227-1.693 3.825-2.708C22 15.846 22 14.583 22 12.06v-.117c0-1.893 0-3.076-.252-3.978zM11.25 21.904v-9.44l-8.998-4.5C2 8.866 2 10.05 2 11.941v.117c0 2.525 0 3.788.597 4.802.598 1.015 1.674 1.58 3.825 2.709l2 1.049c1.293.679 2.11 1.107 2.828 1.286z"></path>
                    </g>
                  </svg>
                  <span className="font-mono font-bold text-2xl text-[#f5f5f7] ">
                    Envio de artículos.
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <p className="font-geist font-bold text-white text-center mb-5 md:text-7xl text-4xl">Aceptamos</p>
        <div className="flex w-screen backdrop-blur-xl justify-around items-center flex-wrap my-5">
          <img src="/merca.png" alt="" className="rounded-md h-[80px]" />
          <img src="/airt.png" alt="" className="rounded-md h-[80px] p-2 bg-white" />
          <img src="/wes.png" alt="" className="rounded-md h-[60px]" />
          <svg
            width={70}
            className="rounded-md mt-5 md:mt-0 bg-white h-fit  p-2"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid"
            viewBox="0 -149 512 512"
          >
            <path
              fill="#6772E5"
              d="M35.982 83.484c0-5.546 4.551-7.68 12.09-7.68 10.808 0 24.461 3.272 35.27 9.103V51.484c-11.804-4.693-23.466-6.542-35.27-6.542C19.2 44.942 0 60.018 0 85.192c0 39.252 54.044 32.995 54.044 49.92 0 6.541-5.688 8.675-13.653 8.675-11.804 0-26.88-4.836-38.827-11.378v33.849c13.227 5.689 26.596 8.106 38.827 8.106 29.582 0 49.92-14.648 49.92-40.106-.142-42.382-54.329-34.845-54.329-50.774zm96.142-66.986l-34.702 7.395-.142 113.92c0 21.05 15.787 36.551 36.836 36.551 11.662 0 20.195-2.133 24.888-4.693V140.8c-4.55 1.849-27.022 8.391-27.022-12.658V77.653h27.022V47.36h-27.022l.142-30.862zm71.112 41.386L200.96 47.36h-30.72v124.444h35.556V87.467c8.39-10.951 22.613-8.96 27.022-7.396V47.36c-4.551-1.707-21.191-4.836-29.582 10.524zm38.257-10.524h35.698v124.444h-35.698V47.36zm0-10.809l35.698-7.68V0l-35.698 7.538V36.55zm109.938 8.391c-13.938 0-22.898 6.542-27.875 11.094l-1.85-8.818h-31.288v165.83l35.555-7.537.143-40.249c5.12 3.698 12.657 8.96 25.173 8.96 25.458 0 48.64-20.48 48.64-65.564-.142-41.245-23.609-63.716-48.498-63.716zm-8.533 97.991c-8.391 0-13.37-2.986-16.782-6.684l-.143-52.765c3.698-4.124 8.818-6.968 16.925-6.968 12.942 0 21.902 14.506 21.902 33.137 0 19.058-8.818 33.28-21.902 33.28zM512 110.08c0-36.409-17.636-65.138-51.342-65.138-33.85 0-54.33 28.73-54.33 64.854 0 42.808 24.179 64.426 58.88 64.426 16.925 0 29.725-3.84 39.396-9.244v-28.445c-9.67 4.836-20.764 7.823-34.844 7.823-13.796 0-26.027-4.836-27.591-21.618h69.547c0-1.85.284-9.245.284-12.658zm-70.258-13.511c0-16.071 9.814-22.756 18.774-22.756 8.675 0 17.92 6.685 17.92 22.756h-36.694z"
            ></path>
          </svg>
          <svg
            width={70}
            className="rounded-md mt-5 md:mt-0 bg-white h-fit  p-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <g fill="#0F0F0F">
              <path
                fillRule="evenodd"
                d="M10.832 1.248c.746-.33 1.59-.33 2.336 0l8.631 3.827C23.775 5.951 23.17 9 21.021 9H2.979C.83 9 .225 5.951 2.2 5.075l8.632-3.827zm1.557 1.88a.958.958 0 00-.778 0l-8.2 3.636c-.099.043-.068.19.04.19H20.55c.108 0 .139-.147.04-.19l-8.2-3.636z"
                clipRule="evenodd"
              ></path>
              <path d="M2 22a1 1 0 011-1h18a1 1 0 110 2H3a1 1 0 01-1-1zM11 19a1 1 0 102 0v-8a1 1 0 10-2 0v8zM6 20a1 1 0 01-1-1v-8a1 1 0 112 0v8a1 1 0 01-1 1zM17 19a1 1 0 102 0v-8a1 1 0 10-2 0v8z"></path>
            </g>
          </svg>
          <svg
            width={70}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-3.5 0 48 48"
            className="rounded-md mt-5 md:mt-0 bg-white h-fit  p-2"
          >
            <g>
              <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                <g fill="#022B87" transform="translate(-804 -660)">
                  <path d="M838.912 663.62c-2.241-2.534-6.29-3.62-11.472-3.62h-15.035a2.15 2.15 0 00-2.128 1.801l-6.26 39.393a1.284 1.284 0 001.275 1.48h9.282l2.332-14.67-.073.46a2.143 2.143 0 012.12-1.802h4.41c8.668 0 15.452-3.492 17.434-13.593.06-.3.154-.874.154-.874.563-3.738-.004-6.275-2.04-8.576zm4.389 10.488c-2.156 9.945-9.03 15.208-19.937 15.208h-3.956L816.458 708h6.416c.927 0 1.714-.669 1.86-1.576l.075-.396 1.476-9.273.095-.512a1.877 1.877 0 011.858-1.576h1.172c7.58 0 13.516-3.056 15.25-11.89.696-3.547.362-6.52-1.359-8.669z"></path>
                </g>
              </g>
            </g>
          </svg>

          <svg
            width={70}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 -9 58 58"
          >
            <g>
              <rect
                width="57"
                height="39"
                x="0.5"
                y="0.5"
                fill="#fff"
                stroke="#F3F3F3"
                rx="3.5"
              ></rect>
              <path
                fill="#FF5F00"
                d="M34.31 28.977H23.96V10.512h10.35v18.465z"
              ></path>
              <path
                fill="#EB001B"
                d="M24.622 19.743c0-3.746 1.767-7.082 4.519-9.232A11.835 11.835 0 0021.829 8C15.296 8 10 13.257 10 19.743c0 6.485 5.296 11.743 11.83 11.743 2.76 0 5.299-.939 7.31-2.511-2.75-2.15-4.518-5.487-4.518-9.232"
              ></path>
              <path
                fill="#F79E1B"
                d="M48.27 19.743c0 6.485-5.296 11.743-11.829 11.743-2.76 0-5.299-.939-7.312-2.511 2.752-2.15 4.52-5.487 4.52-9.232 0-3.746-1.768-7.082-4.52-9.232A11.839 11.839 0 0136.441 8c6.533 0 11.83 5.257 11.83 11.743"
              ></path>
            </g>
          </svg>
          <svg
            width={70}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 -11 70 70"

          >
            <g>
              <rect
                width="69"
                height="47"
                x="0.5"
                y="0.5"
                fill="#fff"
                stroke="#D9D9D9"
                rx="5.5"
              ></rect>
              <path
                fill="#172B85"
                fillRule="evenodd"
                d="M21.25 32.517h-4.24l-3.18-12.132c-.151-.558-.472-1.052-.943-1.284-1.176-.584-2.473-1.05-3.887-1.284v-.467h6.831c.943 0 1.65.701 1.768 1.516l1.65 8.751 4.239-10.267h4.122l-6.36 15.166zm8.718 0h-4.005L29.26 17.35h4.005l-3.297 15.166zm8.479-10.966c.118-.816.825-1.284 1.65-1.284 1.296-.117 2.708.118 3.887.7l.707-3.265A10.138 10.138 0 0041.039 17c-3.887 0-6.715 2.1-6.715 5.017 0 2.218 2.003 3.382 3.418 4.084 1.53.7 2.119 1.166 2.001 1.866 0 1.05-1.178 1.517-2.355 1.517-1.414 0-2.828-.35-4.123-.935l-.707 3.268c1.414.582 2.944.817 4.359.817 4.358.115 7.067-1.984 7.067-5.134 0-3.967-5.537-4.2-5.537-5.949zM58 32.517L54.82 17.35h-3.416c-.707 0-1.414.467-1.65 1.166l-5.888 14h4.123l.823-2.216h5.065l.472 2.216H58zm-6.006-11.083l1.176 5.716h-3.298l2.122-5.716z"
                clipRule="evenodd"
              ></path>
            </g>
          </svg>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 w-screen">
        <div className="flex justify-center">
          <div className="w-10/12 md:w-8/12 p-5 bg-gradient-to-r from-violet-600 to-indigo-800 rounded-xl flex flex-col my-4 justify-center">
            <p className="text-center text-white text-4xl  font-bold mb-10">
              Obten tu cotización
            </p>
            <div className="flex flex-col">
              <Label htmlFor="name" className="mb-2 text-white">
                Nombre completo
              </Label>
              <Input
                onChange={(e) =>
                  setMessage({ ...message, nombre: e.target.value })
                }
                id="name"
              />
            </div>
            <div className="flex flex-col mt-5">
              <Label htmlFor="name" className="mb-2 text-white">
                Instagram
              </Label>
              <Input
                onChange={(e) =>
                  setMessage({ ...message, instagram: e.target.value })
                }
                id="instagram"
              />
            </div>
            <div className="flex flex-col mt-5">
              <Label htmlFor="name" className="mb-2 text-white">
                Celular (incluye código de area)
              </Label>
              <Input
                onChange={(e) =>
                  setMessage({ ...message, celular: e.target.value })
                }
                id="celular"
              />
            </div>
            <div className="flex flex-col mt-5">
              <Label htmlFor="name" className="mb-2 text-white">
                País de destino
              </Label>
              <Input
                onChange={(e) =>
                  setMessage({ ...message, paisDestino: e.target.value })
                }
                id="PaisDestino"
              />
            </div>
            <div className="flex flex-col mt-5">
              <Label htmlFor="name" className="mb-2 text-white">
                Ciudad de destino
              </Label>
              <Input
                onChange={(e) =>
                  setMessage({ ...message, ciudadDestino: e.target.value })
                }
                id="CiudadDestino"
              />
            </div>
            <div className="flex flex-col mt-5">
              <Label htmlFor="name" className="mb-2 text-white">
                Tipo de producto
              </Label>
              <Input
                onChange={(e) =>
                  setMessage({ ...message, producto: e.target.value })
                }
                id="producto"
              />
            </div>
            <div className="flex flex-col mt-5">
              <Button onClick={() => generateWhatsAppLink()}>Enviar</Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full ">
          <div className="w-10/12 md:w-[60%] p-5 bg-gradient-to-r from-violet-800 to-indigo-600 rounded-xl flex flex-col my-4 h-fit justify-center">
            <div className="flex flex-col ">
              <Label
                htmlFor="name"
                className="text-white mb-2 text-center font-sans text-4xl"
              >
                Rastrear tu envío.
              </Label>
              <Input
                onChange={(e) => setTrackingNumber(e.target.value)}
                id="apellido"
              />
            </div>

            <div className="flex flex-col mt-5">
              <Button onClick={redirectToTrackingPage}>Buscar</Button>
            </div>
          </div>
          <Lottie animationData={groovyWalkAnimation} loop={true} />

          {/* <div className="">
            <SliderComponent />
          </div> */}
        </div>
      </section>
      {/* <section>
        <Lottie animationData={groovyWalkAnimation} loop={true} />
      </section> */}
    </main>
  );
}
