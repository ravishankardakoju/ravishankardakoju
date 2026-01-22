
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Impact } from "@/components/impact";
import { Rotary } from "@/components/rotary";
import { Timeline } from "@/components/timeline";
import { Media } from "@/components/media";
import { Gallery } from "@/components/gallery";
import { Contact, Footer } from "@/components/footer";
import { Preloader } from "@/components/preloader";

export default function Home() {
    return (
        <>
            <Preloader />
            <main className="min-h-screen bg-slate-50 selection:bg-secondary/30">
                <Navbar />
                <Hero />
                <About />
                <Impact />
                <Rotary />
                <Timeline />
                <Media />
                <Gallery />
                <Contact />
                <Footer />
            </main>
        </>
    );
}
