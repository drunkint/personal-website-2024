export default function PostTitle({ children }) {
  return (
    // <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
    //   {children}
    // </h1>
    <h1 className="text-gray-300 font-bold text-3xl lg:text-7xl sm:text-5xl md:text-6xl mt-4 mx-auto text-center py-24">
    {children}
    </h1>
  )
}
