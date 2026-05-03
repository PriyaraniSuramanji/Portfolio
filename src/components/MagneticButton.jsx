import { useRef } from "react";

export default function MagneticButton({ children, href, download }) {
  const ref = useRef();

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    ref.current.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };

  const reset = () => {
    ref.current.style.transform = "translate(0,0)";
  };

  const sharedProps = {
    ref,
    onMouseMove: handleMouseMove,
    onMouseLeave: reset,
    className: "px-6 py-3 bg-purple-600 rounded-xl transition inline-block",
  };

  if (href) {
    return (
      <a href={href} download={download} {...sharedProps}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" {...sharedProps}>
      {children}
    </button>
  );
}