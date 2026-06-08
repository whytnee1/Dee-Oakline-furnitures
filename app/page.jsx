"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { IoMdCloudUpload, IoMdClose } from "react-icons/io";
import { RiArtboardLine, RiLayoutGridLine, RiMenuAddLine, RiDownloadLine, RiDeleteBin6Line, RiLockUnlockLine } from "react-icons/ri";

export default function GalleryLanding() {
    // Developer Control Mode State (Toggle with Ctrl + Shift + D)
    const [isDevMode, setIsDevMode] = useState(false);

    // Track shortcut key triggers for developer mode
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "d") {
                e.preventDefault();
                setIsDevMode((prev) => !prev);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    // Sample Initial Artistic Furniture Data
    const [furnitureItems, setFurnitureItems] = useState([
        {
            id: 1,
            title: "The Minimalist Oak Credenza",
            category: "Living Room",
            image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1000&q=80"
        },
        {
            id: 2,
            title: "Scandinavian Arc Lounge Chair",
            category: "Living Room",
            image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1000&q=80"
        },
        {
            id: 3,
            title: "Glossy Kitchen",
            category: "Kitchen",
            image: "/Glossy-kitchen.jpg"
        },
        {
            id: 4,
            title: "Floating Floating Platform Bed",
            category: "Bed Room",
            image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80"
        },
        {
            id: 5,
            title: "Asymmetric Floating Work Desk",
            category: "WorkSpace",
            image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1000&q=80"
        },
         {
            id: 6,
            title: "Elegant Living Room",
            category: "Living Room",
            image: "/ElegantLivingRoom.jpg"
        },
        {
            id: 7,
            title: "Dining set",
            category: "Living Room",
            image: "/dinning.jpg"
        },
        {
            id: 8,
            title: "Sized Bed",
            category: "Bed Room",
            image: "/Bedroom (1).jpg"
        },
        {
            id: 9,
            title: "Luxury Kitchen",
            category: "Kitchen",
            image: "/Kitchen1.jpg"
        },
        {
            id: 10,
            title: "Contemporary Kitchen",
            category: "Kitchen",
            image: "/kitchen2.jpg"
        },
        {
            id: 11,
            title: "Custom Kitchen Design",
            category: "Kitchen",
            image: "/kitchen3.jpg"
        },
        {
            id: 12,
            title: "The Heart of the Home",
            category: "Kitchen",
            image: "/kitchen4.jpg"
        },
        {
            id: 13,
            title: "Timeless Kitchen Design",
            category: "Kitchen",
            image: "/kitchen5.jpg"
        },
        {
            id: 14,
            title: "Modern Living Room",
            category: "Living Room",
            image: "/Livingroom2.jpg"
        },
        {
            id: 15,
            title: "Comfort Meets Style",
            category: "Living Room",
            image: "/Livingroom3.jpg"
        },
        {
            id: 16,
            title: "The Art of Living",
            category: "Living Room",
            image: "/Livingroom4.jpg"
        },
        {
            id: 17,
            title: "Modern Comfort",
            category: "Living Room",
            image: "/Livingroom5.jpg"
        },
        {
            id: 18,
            title: "Curated Living Spaces",
            category: "Living Room",
            image: "/Hdconsole.jpg"
        },
        {
            id: 19,
            title: "Inspired Living",
            category: "Living Room",
            image: "/LightUpconsole.jpg"
        },
        {
            id: 20,
            title: "The Perfect Retreat",
            category: "Bed Room",
            image: "/Bedroom3.jpg"
        },
        {
            id: 21,
            title: "Rest & Relaxation",
            category: "Bed Room",
            image: "/Bedroom4.jpg"
        },
        {
            id: 22,
            title: "Comfort Redefined",
            category: "Bed Room",
            image: "/Bedroom5.jpg"
        },
        {
            id: 23,
            title: "Sophisticated Bedrooms",
            category: "Bed Room",
            image: "/Bedroom6.jpg"
        },
         {
            id: 24,
            title: "Crafted for Comfort",
            category: "Bed Room",
            image: "/Bedroom7.jpg"
        },
        {
            id: 25,
            title: "Personal Sanctuary",
            category: "Bed Room",
            image: "/Bedroom8.jpg"
        },
        {
            id: 26,
            title: "Perfect BrainSpace",
            category: "WorkSpace",
            image: "workspace2.jpg"
        },
        {
            id: 27,
            title: "Designed for Productivity",
            category: "WorkSpace",
            image: "workspace1.jpg"
        },
    ]);

    // Active Category Filter Setup
    const [activeFilter, setActiveFilter] = useState("All");
    const categories = ["All", "Living Room", "Kitchen", "Bed Room", "WorkSpace"];

    // Upload Modal & Form Handlers
    const [isUploadOpen, setIsUploadOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState(null);
    const [formData, setFormData] = useState({
        title: "",
        category: "Living Room",
        description: "",
        image: ""
    });

    // Handle Local Dynamic File Upload Previews
    const handleImageChange = (e) => {
        if (!isDevMode) return;
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setPreviewImage(imageUrl);
            setFormData({ ...formData, image: imageUrl });
        }
    };

    // Form Submission Handling logic
    const handleUploadSubmit = (e) => {
        e.preventDefault();
        
        if (!isDevMode) {
            alert("Action unauthorized. Visiting accounts do not possess catalog generation rights.");
            setIsUploadOpen(false);
            return;
        }

        if (!formData.title || !formData.image || !formData.description) {
            alert("Please complete all fields and attach an image.");
            return;
        }

        const newItem = {
            id: Date.now(),
            title: formData.title,
            category: formData.category,
            description: formData.description,
            image: formData.image
        };

        setFurnitureItems([newItem, ...furnitureItems]);
        setIsUploadOpen(false);
        setPreviewImage(null);
        setFormData({ title: "", category: "Living Room", description: "", image: "" });
    };

    // Delete handling route restricted to developer mode
    const handleDeleteItem = (id, title) => {
        if (!isDevMode) return;
        if (confirm(`Are you sure you want to remove "${title}" from the public showcase catalog?`)) {
            setFurnitureItems(furnitureItems.filter(item => item.id !== id));
        }
    };

    // Image downloading mechanics using blob conversion to bypass standard target browser window defaults
    const handleDownloadImage = async (imageUrl, title) => {
        try {
            const response = await fetch(imageUrl);
            const blob = await response.blob();
            const blobUrl = URL.createObjectURL(blob);
            
            const link = document.createElement("a");
            link.href = blobUrl;
            link.download = `${title.toLowerCase().replace(/\s+/g, "-")}-render.jpg`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(blobUrl);
        } catch (error) {
            window.open(imageUrl, "_blank");
        }
    };

    // Filtered Output Set
    const filteredItems = activeFilter === "All" 
        ? furnitureItems 
        : furnitureItems.filter(item => item.category === activeFilter);

    return (
        <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-900">
            
            {/* Developer Mode Banner Notification Alert */}
            {isDevMode && (
                <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 text-center py-2 px-4 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 sticky top-0 z-50 shadow-md">
                    <RiLockUnlockLine className="text-base animate-bounce" />
                    Developer Workspace Control Active &bull; Destroy privileges granted
                    <button 
                        onClick={() => setIsDevMode(false)}
                        className="ml-4 bg-slate-950 text-white text-[10px] px-2 py-0.5 rounded hover:bg-slate-800 transition-colors"
                    >
                        Exit Mode
                    </button>
                </div>
            )}

            {/* Hero Artistic Curated Header Section */}
            <header className="relative py-20 px-4 max-w-7xl mx-auto border-b border-slate-800">
                <div className="absolute top-10 right-4 animate-pulse pointer-events-none opacity-20">
                    <RiArtboardLine size={180} className="text-amber-500" />
                </div>
                
                <div className="relative z-10 max-w-3xl">
                    <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">
                        <span className="w-8 h-[1px] bg-amber-500"></span>
                        Curated Collection Catalog
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 mb-6">
                        Where Spatial Art <br />Meets Master Craft.
                    </h1>
                    <p className="text-base md:text-lg text-slate-400 font-light leading-relaxed mb-8">
                        Explore our spatial installations, architectural elements, and bespoke premium concepts designed by Dee Oak-line. Contribute to the archive by uploading custom spatial renderings or new inventory items below.
                    </p>
                    
                    {isDevMode && (
                        <button 
                            onClick={() => setIsUploadOpen(true)}
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 px-6 py-3.5 rounded-md font-semibold text-sm shadow-xl hover:from-amber-300 hover:to-amber-400 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 animate-in fade-in slide-in-from-bottom-2"
                        >
                            <RiMenuAddLine className="text-lg" />
                            Upload New Showcase
                        </button>
                    )}
                </div>
            </header>

            {/* Filter Navigation and Controls Bar */}
            <section className="max-w-7xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800/60">
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <RiLayoutGridLine className="text-amber-400" />
                    <span>Filtering {filteredItems.length} design records</span>
                </div>
                
                {/* Dynamic Filters */}
                <div className="flex flex-wrap gap-2">
                    {categories.map((cat, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveFilter(cat)}
                            className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 ${
                                activeFilter === cat 
                                    ? "bg-amber-500 text-slate-950 font-semibold shadow-md shadow-amber-500/10" 
                                    : "bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700"
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </section>

            {/* High-Fidelity Interactive Art Grid Showcase */}
            <main className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredItems.map((item) => (
                        <article 
                            key={item.id} 
                            className="group bg-slate-800/40 rounded-xl overflow-hidden border border-slate-800/80 hover:border-slate-700/80 transition-all duration-300 flex flex-col shadow-xl hover:shadow-2xl hover:shadow-black/40 relative"
                        >
                            {/* Card Image Container context */}
                            <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
                                <span className="absolute top-3 right-3 z-10 bg-slate-900/80 backdrop-blur-md border border-slate-700/50 text-amber-400 text-[10px] font-bold tracking-widest px-2.5 py-1 rounded">
                                    {item.category.toUpperCase()}
                                </span>
                                <img 
                                    src={item.image} 
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:brightness-105"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
                                
                                {/* Hover Interaction Download Interface Controls overlay */}
                                <div className="absolute bottom-3 right-3 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <button
                                        onClick={() => handleDownloadImage(item.image, item.title)}
                                        title="Download Asset Layout File"
                                        className="p-2 bg-slate-900/90 backdrop-blur text-slate-200 hover:text-amber-400 rounded-md border border-slate-700/60 shadow transition-colors"
                                    >
                                        <RiDownloadLine size={16} />
                                    </button>
                                    
                                    {isDevMode && (
                                        <button
                                            onClick={() => handleDeleteItem(item.id, item.title)}
                                            title="Delete Showcase Entry permanently"
                                            className="p-2 bg-red-950/90 backdrop-blur text-red-400 hover:text-red-300 rounded-md border border-red-800/60 shadow transition-colors"
                                        >
                                            <RiDeleteBin6Line size={16} />
                                        </button>
                                    )}
                                </div>
                            </div>

                            {/* Card Body Contents */}
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold tracking-tight text-slate-100 group-hover:text-amber-400 transition-colors duration-200 mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-slate-400 font-light leading-relaxed flex-grow">
                                    {item.description}
                                </p>
                                <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-500">
                                    <span 
                                        className="cursor-default select-none hover:text-slate-400 transition-colors"
                                        onClick={() => setIsDevMode(!isDevMode)}
                                    >
                                        Premium Concept Archive
                                    </span>
                                    <span className="font-mono text-slate-600">#00{String(item.id).slice(-4)}</span>
                                </div>
                            </div>
                        </article>
                    ))}

                    {/* Empty Grid Placeholder Fallback */}
                    {filteredItems.length === 0 && (
                        <div className="col-span-full py-20 text-center border-2 border-dashed border-slate-800 rounded-2xl">
                            <p className="text-slate-500 mb-2">No showcase logs matched this spatial filtering option.</p>
                            <button 
                                onClick={() => setActiveFilter("All")} 
                                className="text-amber-400 text-xs underline font-medium hover:text-amber-300"
                            >
                                Reset Category Selection Filter
                            </button>
                        </div>
                    )}
                </div>
            </main>

            {/* Premium Overlay Asset Management Backdrop (Upload Modal) */}
            {isUploadOpen && isDevMode && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md transition-opacity duration-300">
                    <div className="bg-slate-900 border border-slate-800 rounded-xl w-full max-w-xl shadow-2xl overflow-hidden relative transform transition-all animate-in fade-in zoom-in-95 duration-200">
                        
                        {/* Modal Header Element */}
                        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-800/30">
                            <div>
                                <h2 className="text-lg font-bold text-slate-200">Archive New Creative Piece</h2>
                                <p className="text-xs text-slate-400">Append high resolution spatial design iterations to the portfolio</p>
                            </div>
                            <button 
                                onClick={() => { setIsUploadOpen(false); setPreviewImage(null); }}
                                className="text-slate-400 hover:text-white p-1 bg-slate-800 rounded-md transition-colors"
                            >
                                <IoMdClose size={20} />
                            </button>
                        </div>

                        {/* Interactive Entry Submission Form */}
                        <form onSubmit={handleUploadSubmit} className="p-6 space-y-5">
                            
                            {/* Drag Drop / Selector Input Box */}
                            <div>
                                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                                    Furniture Render Media File
                                </label>
                                {!previewImage ? (
                                    <div className="border-2 border-dashed border-slate-800 hover:border-amber-500/40 bg-slate-950/40 rounded-lg p-6 text-center transition-colors relative cursor-pointer group">
                                        <input 
                                            type="file" 
                                            accept="image/*"
                                            onChange={handleImageChange}
                                            className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                                            required
                                        />
                                        <IoMdCloudUpload size={36} className="mx-auto text-slate-600 group-hover:text-amber-400 transition-colors mb-2" />
                                        <p className="text-sm text-slate-300 font-medium">Click or Drag design picture file here</p>
                                        <p className="text-xs text-slate-500 mt-1">Supports high-res PNG, JPG or WEBP variants</p>
                                    </div>
                                ) : (
                                    <div className="relative rounded-lg overflow-hidden border border-slate-700 bg-slate-950 aspect-[16/9]">
                                        <img src={previewImage} alt="Upload preview asset" className="w-full h-full object-contain mx-auto" />
                                        <button 
                                            type="button"
                                            onClick={() => setPreviewImage(null)}
                                            className="absolute top-2 right-2 bg-red-500/90 hover:bg-red-600 text-white p-1 rounded shadow-md transition-colors text-xs font-medium px-2 py-1"
                                        >
                                            Change Media
                                        </button>
                                    </div>
                                )}
                            </div>

                            {/* Dual Structural Information Layout Inputs */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <div className="sm:col-span-2">
                                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                                        Design Piece Title
                                    </label>
                                    <input 
                                        type="text" 
                                        placeholder="e.g., Avant-Garde Ash Sideboard"
                                        value={formData.title}
                                        onChange={(e) => setFormData({...formData, title: e.target.value})}
                                        className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-amber-500 transition-colors"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                                        Spatial Context
                                    </label>
                                    <select
                                        value={formData.category}
                                        onChange={(e) => setFormData({...formData, category: e.target.value})}
                                        className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-amber-500 transition-colors"
                                    >
                                        {categories.filter(c => c !== "All").map((cat, i) => (
                                            <option key={i} value={cat} className="bg-slate-900">{cat}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Structural Element Details Input fields */}
                            <div>
                                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                                    Craft & Material Specifications Narrative
                                </label>
                                <textarea 
                                    rows="3"
                                    placeholder="Elaborate on dimensions, primary wood materials, processing textures, or specialized joining techniques..."
                                    value={formData.description}
                                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                                    className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                                    required
                                ></textarea>
                            </div>

                            {/* Actions Execution Bar */}
                            <div className="pt-2 flex items-center justify-end gap-3 border-t border-slate-800">
                                <button 
                                    type="button"
                                    onClick={() => { setIsUploadOpen(false); setPreviewImage(null); }}
                                    className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
                                >
                                    Cancel
                                </button>
                                <button 
                                    type="submit"
                                    className="bg-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded shadow-lg hover:bg-amber-400 transition-colors"
                                >
                                    Publish to Catalog
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}