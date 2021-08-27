import { useState } from "react";
const Create = (props) => {
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [cate, setCate] = useState("");
    const [url, setUrl] = useState("");

    const setState = (event, setter) => {
        setter(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();
        props.addClientToList({
            name,
            desc,
            cate,
            url
        });
        setName("");
        setDesc("");
        setCate("");
        setUrl("");
    }


    return (
        <form onSubmit={submitHandler} >
            <div>
                <label htmlFor="name">Client's Name</label>
                <input
                type="text"
                placeholder="client name"
                    value={name}
                    onChange={(event) => setState(event, setName)}
            />
            </div>
            <div>
                <label htmlFor="description">Description</label>
                <textarea
                type="text"
                placeholder="project description"
                    value={desc}
                    onChange={(event) => setState(event, setDesc)}
            ></textarea>
            </div>
            <div>
                <label htmlFor="cate">Category</label>
                <input
                type="text"
                placeholder="category"
                    value={cate}
                    onChange={(event) => setState(event, setCate)}
            />
            </div>
            <div>
                <label htmlFor="urlLink">URL</label>
                <input
                type="text"
                placeholder="URL"
                    value={url}
                    onChange={(event) => setState(event, setUrl)}
                />
                <div>
            </div>
            <div>
                <input
                type="submit"
                placeholder="submit"
            />
            </div>
            <div>
                <input
                type="reset"
                placeholder="reset"
            />
            </div>
            </div>
        </form>
    )
};

export default Create;