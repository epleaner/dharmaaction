import Link from "next/link";

const LocalGroups = () => {
  return (
    <div className="grid prose">
      <section className="">
        <h1>Local Groups</h1>
        <p>Interested in finding a DANCE group close to you?</p>
        <ul>
          <li>
            <Link href="/local-groups/uk">
              <a>UK DANCE Groups</a>
            </Link>
          </li>
          <li>
            <Link href="/local-groups/international">
              <a>International Groups</a>
            </Link>
          </li>
          <li>
            <Link href="/local-groups/setting-up">
              <a>Setting Up a DANCE group</a>
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default LocalGroups;
