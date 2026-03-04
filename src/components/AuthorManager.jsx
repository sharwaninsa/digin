// components/AuthorManager.jsx
import React, { useState } from 'react';
import { User, X, Check, Edit2, Trash2, Plus, Save } from 'lucide-react';

const AuthorManager = ({ authors, onSelect, onAdd, onUpdate, onDelete, selectedAuthor }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [editingAuthor, setEditingAuthor] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    avatar: '',
    bio: '',
    role: ''
  });

  // Format name to capitalize first letter of each word
  const formatName = (name) => {
    return name
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const handleSubmit = () => {
    const formattedName = formatName(formData.name);
    const authorData = {
      ...formData,
      name: formattedName,
      id: editingAuthor?.id || Date.now().toString()
    };

    if (editingAuthor) {
      onUpdate(authorData);
    } else {
      onAdd(authorData);
    }

    // Reset form
    setFormData({ name: '', email: '', avatar: '', bio: '', role: '' });
    setIsAdding(false);
    setEditingAuthor(null);
  };

  const handleEdit = (author) => {
    setEditingAuthor(author);
    setFormData({
      name: author.name,
      email: author.email || '',
      avatar: author.avatar || '',
      bio: author.bio || '',
      role: author.role || ''
    });
    setIsAdding(true);
  };

  return (
    <div className="space-y-4">
      {/* Author List */}
      <div className="space-y-2 max-h-60 overflow-y-auto">
        {authors.map((author) => (
          <div
            key={author.id}
            className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all ${
              selectedAuthor?.id === author.id
                ? 'bg-amber-50 dark:bg-amber-900/30 border-2 border-amber-500'
                : 'bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700'
            }`}
            onClick={() => onSelect(author)}
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-gradient-to-r from-amber-500 to-amber-600">
                {author.avatar ? (
                  <img src={author.avatar} alt={author.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white font-bold">
                    {author.name.charAt(0)}
                  </div>
                )}
              </div>
              <div>
                <p className="font-medium text-slate-900 dark:text-white">{author.name}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">{author.role || 'Author'}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleEdit(author);
                }}
                className="p-1 hover:bg-white dark:hover:bg-slate-600 rounded"
              >
                <Edit2 className="w-4 h-4 text-slate-500" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  if (window.confirm('Are you sure you want to delete this author?')) {
                    onDelete(author.id);
                  }
                }}
                className="p-1 hover:bg-white dark:hover:bg-slate-600 rounded"
              >
                <Trash2 className="w-4 h-4 text-red-500" />
              </button>
              {selectedAuthor?.id === author.id && (
                <Check className="w-4 h-4 text-green-500" />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Add Author Button */}
      {!isAdding && (
        <button
          onClick={() => setIsAdding(true)}
          className="w-full py-2 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl text-slate-600 dark:text-slate-400 hover:border-amber-500 hover:text-amber-500 transition-colors flex items-center justify-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Author</span>
        </button>
      )}

      {/* Add/Edit Author Form */}
      {isAdding && (
        <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-4 space-y-3">
          <input
            type="text"
            placeholder="Author Name *"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-3 py-2 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700"
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-3 py-2 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700"
          />
          <input
            type="text"
            placeholder="Avatar URL"
            value={formData.avatar}
            onChange={(e) => setFormData({ ...formData, avatar: e.target.value })}
            className="w-full px-3 py-2 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700"
          />
          <input
            type="text"
            placeholder="Role (e.g., Senior Editor)"
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            className="w-full px-3 py-2 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700"
          />
          <textarea
            placeholder="Bio"
            value={formData.bio}
            onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
            rows="2"
            className="w-full px-3 py-2 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700"
          />
          
          {/* Preview */}
          {formData.name && (
            <div className="p-3 bg-white dark:bg-slate-900 rounded-lg">
              <p className="text-xs text-slate-500 mb-2">Preview:</p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-gradient-to-r from-amber-500 to-amber-600">
                  {formData.avatar ? (
                    <img src={formData.avatar} alt={formData.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-white font-bold">
                      {formatName(formData.name).charAt(0)}
                    </div>
                  )}
                </div>
                <div>
                  <p className="font-medium text-slate-900 dark:text-white">{formatName(formData.name)}</p>
                  <p className="text-xs text-slate-500">{formData.role || 'Author'}</p>
                </div>
              </div>
            </div>
          )}

          <div className="flex space-x-2">
            <button
              onClick={handleSubmit}
              disabled={!formData.name}
              className="flex-1 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg font-semibold hover:from-amber-600 hover:to-amber-700 transition-all disabled:opacity-50 flex items-center justify-center space-x-2"
            >
              <Save className="w-4 h-4" />
              <span>{editingAuthor ? 'Update' : 'Save'} Author</span>
            </button>
            <button
              onClick={() => {
                setIsAdding(false);
                setEditingAuthor(null);
                setFormData({ name: '', email: '', avatar: '', bio: '', role: '' });
              }}
              className="px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthorManager;