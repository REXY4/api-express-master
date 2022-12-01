import Manifest from "./src/manifest"

const start =  () => {
    const manifest = new Manifest()
    return manifest.start()
}


start()