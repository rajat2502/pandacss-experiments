import { Button } from "@headout/design-system/atoms";
import { css } from "@headout/token-system/css";

export default function Home() {
  return (
    <>
      <Button color='brand.white' />
      <button
        className={css({
          color: "brand.white",
          backdropBlur: "10px",
          backgroundColor: "brand.purps",
          borderRadius: "10%",
          padding: "10px",
          margin: "10px",
        })}
      >
        click me
      </button>
    </>
  );
}
