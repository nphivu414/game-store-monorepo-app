// import * as React from 'react';
// import ContentLoader, { IContentLoaderProps } from 'react-content-loader';
// import { useTransition, animated } from 'react-spring';

// type SkeletonProps = IContentLoaderProps & {
//   isLoading: boolean;
// };

// const Skeleton: React.FC<SkeletonProps> = ({ isLoading, children, ...rest }) => {
//   const transitions = useTransition(isLoading, {
//     from: { opacity: 0 },
//     enter: { opacity: 1 },
//     leave: { opacity: 0 },
//     delay: 200,
//     // config: config.molasses,
//   });

//   return transitions(({ opacity }, item) => {
//     return item ? (
//       <animated.div
//         style={{
//           position: 'absolute',
//           opacity: opacity.to({ range: [0.0, 1.0], output: [0, 1] }),
//         }}
//       >
//         <ContentLoader speed={2} height={'auto'} backgroundColor="#cccccc" foregroundColor="#ecebeb" {...rest}>
//           <rect x="0" y="0" rx="3" ry="3" width="67" height="11" />
//           <rect x="76" y="0" rx="3" ry="3" width="140" height="11" />
//           <rect x="0" y="22" rx="3" ry="3" width="140" height="11" />
//           <rect x="146" y="22" rx="3" ry="3" width="173" height="11" />
//           <rect x="127" y="48" rx="3" ry="3" width="53" height="11" />
//           <rect x="187" y="48" rx="3" ry="3" width="72" height="11" />
//           <rect x="-2" y="47" rx="3" ry="3" width="100" height="11" />
//           <rect x="0" y="71" rx="3" ry="3" width="37" height="11" />
//           <rect x="226" y="70" rx="3" ry="3" width="72" height="11" />
//           <rect x="50" y="71" rx="3" ry="3" width="100" height="11" />
//           <rect x="163" y="71" rx="3" ry="3" width="53" height="11" />
//         </ContentLoader>
//       </animated.div>
//     ) : (
//       <animated.div
//         style={{
//           opacity: opacity.to({ range: [1.0, 0.0], output: [1, 0] }),
//         }}
//       >
//         {children}
//       </animated.div>
//     );
//   });
// };

// export default Skeleton;
