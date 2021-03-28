// /** @jsxImportSource @emotion/react */
// import { CardView, StandardButton } from "components"
// import { cssModalCatchPokemon } from "./CatchPokemon.style"
// import { CloseIcon } from 'assets/svg/CloseIcon'
// import SadPikaImg from 'assets/img/sad-pika-min.png'

// export const ModalCatchPokemon = () => {

//   const _renderPokeGotAway = () => (
//     <div className="modal-content">
//       <div className="content-msg">
//         <div className="content-hero">
//           <img 
//             src={SadPikaImg}
//             alt="Pika is sad..." />
//         </div>
//         Oh no... better luck next time!
//       </div>
//       <div className="content-actions">
//         <StandardButton 
//           title="Close" 
//           stretchWidth={true}
//           />
//       </div>
//     </div>
//   )

//   return (
//     <div css={cssModalCatchPokemon()}>
//       <CardView>
//         <div className="modal-inner">
//           <div className="modal-titlebar">
//             <div className="titlebar-title">
//               Catch a pokemon!
//             </div>
//             <div className="titlebar-actions">
//               <StandardButton 
//                 title={(
//                   <div className="icon-close">
//                     <CloseIcon color="black"/>
//                   </div>
//                 )}
//                 />
//             </div>
//           </div>

//           {_renderPokeGotAway()}
//         </div>
//       </CardView>
//     </div>
//   )
// }
// /** @jsxImportSource @emotion/react */
// import { css } from '@emotion/react'
// import { mqSizes } from 'components/theme'

// export const cssModalCatchPokemon = () => css`
  
//   .modal-inner {
//     width: 400px;
//     height: 350px;

//     display: grid;
//     grid-template-columns: 1fr;
//     grid-template-rows: auto 1fr;
//     gap: 0px 0px;
//     grid-template-areas:
//       "."
//       ".";

//     @media (max-width: ${mqSizes.mobileM}) {
//       width: 300px;
//       height: 300px;
//     }
//     @media (max-width: ${mqSizes.mobileS}) {
//       width: 250px;
//     }

//     .modal-titlebar {
//       min-height: 48px;

//       display: grid;
//       grid-template-columns: 1fr auto;
//       grid-template-rows: 1fr;
//       gap: 0px 0px;
//       grid-template-areas:
//         ". .";

//       .titlebar-title {
//         width: 100%;
//         height: 100%;
//         padding-left: 8px;

//         display: flex;
//         flex-direction: column;
//         justify-content: center;

//         font-family: 'Ubuntu';
//         font-size: 21pt;
//         font-weight: 600;

//         @media (max-width: ${mqSizes.mobileM}) {
//           font-size: 18pt;
//         }
//         @media (max-width: ${mqSizes.mobileS}) {
//           font-size: 14pt;
//         }
//       }

//       .icon-close {
//         width: 24px;
//         height: 24px;
//       }

//     }

//     .modal-content {
//       width: 100%;
//       height: 100%;

//       display: grid;
//       grid-template-columns: 1fr;
//       grid-template-rows: 1fr auto;
//       gap: 0px 0px;
//       grid-template-areas:
//         "."
//         ".";

//       .content-msg {
//         width: 100%;
//         height: 100%;

//         display: flex;
//         flex-direction: column;
//         align-items: center;
//         justify-content: center;

//         .content-hero {
//           width: 100%;

//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: center;

//           padding-bottom: 12px;
//         }

//         .content-hero img {
//           width: 300px;

//           @media (max-width: ${mqSizes.mobileM}) {
//             width: 250px;
//           }
//           @media (max-width: ${mqSizes.mobileS}) {
//             width: 200px;
//           }
//         }
//       }

//       .content-actions {
//         padding: 8px;
//       }

//     }
//   }
// `

export {

}