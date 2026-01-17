import { useState } from 'react'
import { Plus, Trash2, Edit3, Search, Filter, Check } from 'lucide-react'
import { useTasks } from './hooks/useTasks'
import toast, { Toaster } from 'react-hot-toast'

export default function App() {
  const { tasks, addTask, deleteTask, updateTask } = useTasks()
  const [search, setSearch] = useState('')
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('Work')
  const [editingId, setEditingId] = useState(null)
  const [filterTab, setFilterTab] = useState('All')

  const categories = ['Work', 'Personal', 'Urgent']

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title.trim()) return toast.error('Isi judul terlebih dahulu')

    if (editingId) {
      updateTask({ id: editingId, title, category })
      setEditingId(null)
      toast.success('Berhasil diperbarui')
    } else {
      addTask({ title, category })
      toast.success('Berhasil ditambah')
    }
    setTitle('')
  }

  const startEdit = (task) => {
    setEditingId(task.id)
    setTitle(task.title)
    setCategory(task.category)
  }

  // Logika Filter dan Search
  const filteredTasks = tasks.filter(t => {
    const matchSearch = t.title.toLowerCase().includes(search.toLowerCase())
    const matchFilter = filterTab === 'All' || t.category === filterTab
    return matchSearch && matchFilter
  })

  return (
    <div className="min-h-screen bg-zinc-50 p-6 text-zinc-900 font-sans">
      <Toaster />
      
      <header className="max-w-4xl mx-auto mb-10">
        <h1 className="text-3xl font-black">TaskFlow</h1>
        <p className="text-zinc-500">Manajemen tugas dengan website. By Made Dipa</p>
      </header>

      <main className="max-w-4xl mx-auto">
        {/* Form Input yang Dinamis */}
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-3xl border border-zinc-200 shadow-sm mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <input 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder={editingId ? "Edit tugas ini..." : "Apa yang ingin dikerjakan?"}
              className="flex-1 px-4 py-3 rounded-xl bg-zinc-50 border-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
            <select 
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="px-4 py-3 rounded-xl bg-zinc-50 border-none focus:ring-2 focus:ring-blue-500"
            >
              {categories.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
            <button className={`${editingId ? 'bg-blue-600' : 'bg-zinc-900'} text-white px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all`}>
              {editingId ? <Check size={20} /> : <Plus size={20} />}
              {editingId ? 'Update' : 'Tambah'}
            </button>
          </div>
          {editingId && (
            <button onClick={() => {setEditingId(null); setTitle('')}} className="mt-2 text-sm text-zinc-400 hover:text-zinc-600">
              Batal Edit
            </button>
          )}
        </form>

        {/* Tab Filter & Search */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          <div className="flex bg-zinc-200 p-1 rounded-xl w-full md:w-auto">
            {['All', ...categories].map(tab => (
              <button
                key={tab}
                onClick={() => setFilterTab(tab)}
                className={`flex-1 md:flex-none px-4 py-2 rounded-lg text-sm font-medium transition-all ${filterTab === tab ? 'bg-white shadow-sm text-zinc-900' : 'text-zinc-500'}`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-3 text-zinc-400" size={16} />
            <input 
              placeholder="Cari..."
              className="w-full pl-10 pr-4 py-2 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-200"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* List Data */}
        <div className="grid gap-4">
          {filteredTasks.map(task => (
            <div key={task.id} className="group flex items-center justify-between p-5 bg-white rounded-2xl border border-zinc-200 hover:border-zinc-300 transition-all">
              <div className="flex flex-col gap-1">
                <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-md w-fit ${
                  task.category === 'Urgent' ? 'bg-red-100 text-red-600' : 
                  task.category === 'Work' ? 'bg-blue-100 text-blue-600' : 'bg-zinc-100 text-zinc-600'
                }`}>
                  {task.category}
                </span>
                <h3 className="font-semibold text-lg text-zinc-800">{task.title}</h3>
              </div>
              <div className="flex gap-2">
                <button onClick={() => startEdit(task)} className="p-2 text-zinc-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                  <Edit3 size={18} />
                </button>
                <button onClick={() => {deleteTask(task.id); toast.success('Terhapus')}} className="p-2 text-zinc-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all">
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}