import "../scss/App.scss";

const App = ({ Component, pageProps }) => {
    return (
        <>
             <h1 className="title">Graba tu audio</h1>
            <Component {...pageProps} />
        </>
    );
};

export default App;
