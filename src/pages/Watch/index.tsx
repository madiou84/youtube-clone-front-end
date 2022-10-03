interface WatchProps {
    [key: string]: any;
}

export default function Watch(props: WatchProps) {
    return (
        <main className="lg:flex w-full lg:content-start lg:items-start lg:gap-x-2 lg:pt-16">
            <div className="w-full">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, tempore officia repudiandae asperiores nesciunt dignissimos quas natus delectus laudantium suscipit. Reiciendis molestias accusantium tempora soluta quibusdam non illum rem obcaecati.</p>
            </div>
            <div className="w-96">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque suscipit error commodi perspiciatis eius quam! Quae, enim minus quam dicta cum libero expedita quia inventore natus corrupti maxime aliquid beatae!</p>
            </div>
        </main>
    );
}
