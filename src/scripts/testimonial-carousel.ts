
// Extend Window interface to declare __goTestimonial
declare global {
    interface Window {
        __goTestimonial: (delta: number) => void;
    }
}
export default function initTestimonialCarousel() {
    const list = document.getElementById("t-carousel");
    if (!list) return;
    let index = 0;
    const total = list.children.length;

    function scrollToCard(idx: number) {
        if (!list) return;
        const el = list.children[idx];
        if (!el) return;
        const target =
            (el as HTMLElement).offsetLeft -
            (list.clientWidth - (el as HTMLElement).clientWidth) / 2;
        list.scrollTo({ left: target, behavior: "smooth" });
    }

    window.__goTestimonial = function (delta: number) {
        index = (index + delta + total) % total;
        scrollToCard(index);
    };
};
