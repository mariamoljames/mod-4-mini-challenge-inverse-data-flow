import React from 'react'

class NewSpice extends React.Component {
  state = {
    title: "",
    image: "",
    notes: "",
    description: "",
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log("submitting...")
    this.props.addNewSpice(this.state)
  }

  newFormHandler = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
    return (
      <div className="card">
        <h2>New Spice</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">Title: </label>
          <input type="text" name="title" onChange={this.newFormHandler} value={this.state.title}/>
          <label htmlFor="image">Image URL: </label>
          <input type="text" name="image" onChange={this.newFormHandler} value={this.state.image}/>
          <label htmlFor="notes">Tasting Notes: </label>
          <input type="text" name="notes" onChange={this.newFormHandler} value={this.state.notes}/>
          <label htmlFor="notes">Description: </label>
          <textarea type="text" name="description" onChange={this.newFormHandler} value={this.state.description}/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default NewSpice