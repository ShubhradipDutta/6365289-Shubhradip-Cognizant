import React, { useState } from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {
  const [selected, setSelected] = useState('book');

  // 1️⃣ Using if-else
  let componentToRender;
  if (selected === 'book') {
    componentToRender = <BookDetails />;
  } else if (selected === 'blog') {
    componentToRender = <BlogDetails />;
  } else {
    componentToRender = <CourseDetails />;
  }

  return (
    <div className="App">
      <h1>📖 Blogger App</h1>

      <div>
        <button onClick={() => setSelected('book')}>Book</button>
        <button onClick={() => setSelected('blog')}>Blog</button>
        <button onClick={() => setSelected('course')}>Course</button>
      </div>

      <hr />

      {/* 2️⃣ Conditional Rendering using element variable */}
      {componentToRender}

      {/* 3️⃣ Conditional Rendering using ternary operator */}
      <div>
        {selected === 'book' ? (
          <p>You're viewing Book Details 📘</p>
        ) : selected === 'blog' ? (
          <p>You're viewing Blog Details 📝</p>
        ) : (
          <p>You're viewing Course Details 🎓</p>
        )}
      </div>

      {/* 4️⃣ Conditional Rendering using Logical AND (&&) */}
      {selected === 'book' && <p>Books are the window to knowledge.</p>}
      {selected === 'blog' && <p>Blogs are short and crisp information bites.</p>}
      {selected === 'course' && <p>Courses provide structured learning paths.</p>}
    </div>
  );
}

export default App;
