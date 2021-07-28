import React from "react";

import Link from "next/link";

const FourOFour = () => {
  return (
    <div className="prose max-w-none">
      <p className="prose-xl">Form is emptiness, emptiness is form.</p>
      <p className="prose-xl">
        Form is not other than emptiness, emptiness is not other than form.
      </p>
      <p>Sorry, the page you were looking for could not be found.</p>
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </div>
  );
};

export default FourOFour;
