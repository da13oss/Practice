import React, { useState } from 'react';

const Tabs = ({ items, addTab, updateTabContent }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [newLabel, setNewLabel] = useState('');
    const [newContent, setNewContent] = useState('');

    const handleAddTab = (e) => {
        e.preventDefault();
        if (newLabel && newContent) {
            addTab(newLabel, newContent);
            setNewLabel('');
            setNewContent('');
        }
    };

    return (
        <div>
            <div className="tab-headers">
                {items.map((item, index) => (
                    <button
                        key={index}
                        className={index === activeIndex ? 'active' : ''}
                        onClick={() => setActiveIndex(index)}
                    >
                        {item.label}
                    </button>
                ))}
            </div>
            <div className="tab-content">
                <textarea
                    value={items[activeIndex].content}
                    onChange={(e) => updateTabContent(activeIndex, e.target.value)}
                />
            </div>
            <form onSubmit={handleAddTab}>
                <input
                    type="text"
                    value={newLabel}
                    onChange={(e) => setNewLabel(e.target.value)}
                    placeholder="New tab label"
                />
                <input
                    type="text"
                    value={newContent}
                    onChange={(e) => setNewContent(e.target.value)}
                    placeholder="New tab content"
                />
                <button type="submit">Add Tab</button>
            </form>
        </div>
    );
};

export default Tabs;
