import { memo } from "react"

const year = new Date().getFullYear()

function Footer(props) {
    return (
        <footer className="main-footer">
            <strong>
                Copyright &copy; {year}
                <a href="https://github.com/brunohubner" target="_blank" rel="noreferrer"> Bruno Hubner</a>
            </strong>
        </footer>
    )
}

export default memo(Footer)