export default function Loader() {
    return (
      <div className="flex justify-center items-center h-screen w-screen">
        {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }