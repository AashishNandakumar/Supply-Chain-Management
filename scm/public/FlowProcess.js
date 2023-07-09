import React from "react";
import styles from "../styles/FlowIllustration.module.css";
import Link from "next/link";

const FlowIllustration = () => {
  const Message = () => {
    window.alert(
      "Sorry, we are working on some developments 😓 , please come back later"
    );
  };
  return (
    <>
      <section className={styles.gridContainer}>
        <div className={styles.gridItem1}>
          <div className={styles.gridImg}>
            <img src="supplier-3.png" alt="supplier" />
          </div>
          <div className={styles.gridDescription}>
            <h3>SUPPLIERS</h3>
            <p>
              Vivamus interdum pharetra suscipit. Fusce purus turpis,
              <br /> bibendum a tincidunt a, ullamcorper.
            </p>
            <Link href="supplierInfo">
              <button>View Live</button>
            </Link>
          </div>
        </div>
        <div className={styles.gridItem2}>
          <div className={styles.gridImg}>
            <img src="manufacturers.png" alt="supplier" />
          </div>
          <div className={styles.gridDescription}>
            <h3>MANUFACTURERS</h3>
            <p>
              Suspendisse ut lacus id libero egestas lobortis et ut erat.
              <br /> Donec viverra.
            </p>
            <button onClick={Message}>View Live</button>
          </div>
        </div>
        <div className={styles.gridItem3}>
          <div className={styles.gridImg}>
            <img src="logistics.png" alt="supplier" />
          </div>
          <div className={styles.gridDescription}>
            <h3>LOGISTICS</h3>
            <p>
              Nam maximus ut nisl in porttitor. Curabitur id nibh justo.
              <br /> Duis eget.
            </p>
            <button onClick={Message}>View Live</button>
          </div>
        </div>
        <div className={styles.gridItem4}>
          <div className={styles.gridImg}>
            <img src="wholesaler.png" alt="supplier" />
          </div>
          <div className={styles.gridDescription}>
            <h3>WHOLESALERS</h3>
            <p>
              Praesent nec enim sit amet risus cursus sagittis venenatis <br />a
              nibh. Mauris.
            </p>
            <button onClick={Message}>View Live</button>
          </div>
        </div>
        <div className={styles.gridItem5}>
          <div className={styles.gridImg}>
            <img src="retailers.png" alt="supplier" />
          </div>
          <div className={styles.gridDescription}>
            <h3>RETAILERS</h3>
            <p>
              Cras tempor, odio non sodales commodo, turpis magna <br />
              commodo arcu, nec pretium.
            </p>
            <button onClick={Message}>View Live</button>
          </div>
        </div>
        <div className={styles.gridItem6}>
          <div className={styles.gridImg}>
            <img src="warehouse.png" alt="supplier" />
          </div>
          <div className={styles.gridDescription}>
            <h3>WAREHOUSE PROVIDERS</h3>
            <p>
              Praesent nec enim sit amet risus cursus sagittis venenatis <br />a
              nibh. Mauris.
            </p>
            <button onClick={Message}>View Live</button>
          </div>
        </div>
        <div className={styles.gridItem7}>
          <div className={styles.gridImg}>
            <img src="serviceProvider.png" alt="supplier" />
          </div>
          <div className={styles.gridDescription}>
            <h3>SERVICE PROVIDERS</h3>
            <p>
              Praesent nec enim sit amet risus cursus sagittis venenatis <br />a
              nibh. Mauris.
            </p>
            <button onClick={Message}>View Live</button>
          </div>
        </div>
        <div className={styles.gridItem8}>
          <div className={styles.gridImg}>
            <img src="financialInstitutions.png" alt="supplier" />
          </div>
          <div className={styles.gridDescription}>
            <h3>FINANCIAL INSTITUTIONS</h3>
            <p>
              Praesent nec enim sit amet risus cursus sagittis venenatis <br />a
              nibh. Mauris.
            </p>
            <button onClick={Message}>View Live</button>
          </div>
        </div>
        <div className={styles.gridItem9}>
          <div className={styles.gridImg}>
            <img src="regulatoryBodies.png" alt="supplier" />
          </div>
          <div className={styles.gridDescription}>
            <h3>REQULATORY BODIES</h3>
            <p>
              Praesent nec enim sit amet risus cursus sagittis venenatis <br />a
              nibh. Mauris.
            </p>
            <button onClick={Message}>View Live</button>
          </div>
        </div>
        <div className={styles.gridItem10}>
          <div className={styles.gridImg}>
            <img src="shareHolders.png" alt="supplier" />
          </div>
          <div className={styles.gridDescription}>
            <h3>SHAREHOLDERS</h3>
            <p>
              Duis commodo massa ornare ex tempor lacinia. Nam <br />
              maximus eget eros quis.
            </p>
            <button onClick={Message}>View Live</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default FlowIllustration;
