export default function Footer(props) {
    return (
        <footer className="main-footer">
            <strong>
                Copyright &copy; {new Date().getFullYear()}
                <a href="https://github.com/brunohubner" target="_blank"> Bruno Hubner</a>
            </strong>
        </footer>
    )
}