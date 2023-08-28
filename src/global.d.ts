
declare global {
    namespace JSX {
      interface IntrinsicElements {
        'needle-engine': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      }
    }
  }