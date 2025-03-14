import Banner from "@/components/Banner";
import Card from "@/components/Card";
import TopMenu from "@/components/TopMenu";

export default function Home() {
  return (
    <main>
      <Banner/>
      <div
      
               style={{
                 display: "flex",
                 justifyContent: "center",
                 gap: "20px",
                 marginTop: "20px",
                 paddingRight: "20px",
               }}
             >
               <Card venueName="The Bloom Pavilion" imgSrc="/img/bloom.jpg" />
               <Card venueName="Spark Space" imgSrc="/img/sparkspace.jpg" />
               <Card venueName="The Grand Table" imgSrc="/img/grandtable.jpg" />
             </div>

    </main>
  );
}
