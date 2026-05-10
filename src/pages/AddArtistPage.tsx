import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

type FormState = {
  artistName: string;
  oneLiner: string;
  phone: string;
  email: string;
  stageName: string;
  craftScore: string;
  musicalSkills: string;
  stagePerformance: string;
  crowdEngagement: string;
  professionalism: string;
  punctuality: string;
  realityCheck: string;
  verificationDate: string;
  baseLocation: string;
  languages: string;
  musicianType: string;
  performanceType: string;
  genres: string;
  youtubeLink: string;
  instagramLink: string;
};

const DEFAULT_STATE: FormState = {
  artistName: '',
  oneLiner: '',
  phone: '',
  email: '',
  stageName: '',
  craftScore: '',
  musicalSkills: '',
  stagePerformance: '',
  crowdEngagement: '',
  professionalism: '',
  punctuality: '',
  realityCheck: '',
  verificationDate: '',
  baseLocation: '',
  languages: '',
  musicianType: '',
  performanceType: '',
  genres: '',
  youtubeLink: '',
  instagramLink: '',
};

export default function AddArtistPage(): JSX.Element {
  const [form, setForm] = useState<FormState>(DEFAULT_STATE);
  const [isCkLoaded, setIsCkLoaded] = useState(false);
  const introRef = useRef<HTMLDivElement | null>(null);
  const whyRef = useRef<HTMLDivElement | null>(null);
  const introEditor = useRef<any>(null);
  const whyEditor = useRef<any>(null);
  // fallback textareas while CDN loads (preserve text)
  const [introFallback, setIntroFallback] = useState('');
  const [whyFallback, setWhyFallback] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  // shared classes: visible border, padding inside (gap between border and text) and rounded corners
  const inputClass = 'input input-bordered w-full px-3 py-2 rounded-md ring-1 ring-gray-200 dark:ring-gray-700';
  const textareaClass = 'textarea textarea-bordered w-full min-h-[140px] px-3 py-2 rounded-md ring-1 ring-gray-200 dark:ring-gray-700';

  // Load CKEditor CDN script if not already present
  useEffect(() => {
    const src = 'https://cdn.ckeditor.com/ckeditor5/39.0.1/classic/ckeditor.js';
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${src}"]`);
    if (existing) {
      if ((window as any).ClassicEditor) setIsCkLoaded(true);
      return;
    }

    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.onload = () => {
      setIsCkLoaded(true);
    };
    document.head.appendChild(script);

    return () => {
      // do not remove script on unmount — other pages may rely on it
    };
  }, []);

  // initialize editors when CDN loaded
  useEffect(() => {
    if (!isCkLoaded) return;
    const CK = (window as any).ClassicEditor;
    if (!CK) return;

    if (introRef.current && !introEditor.current) {
      CK.create(introRef.current).then((editor: any) => {
        introEditor.current = editor;
        // initialize editor with any fallback content
        if (introFallback) editor.setData(introFallback);
        // keep editor data in sync if needed later
      }).catch((err: any) => console.error('CKEditor init (intro) error', err));
    }

    if (whyRef.current && !whyEditor.current) {
      CK.create(whyRef.current).then((editor: any) => {
        whyEditor.current = editor;
        if (whyFallback) editor.setData(whyFallback);
      }).catch((err: any) => console.error('CKEditor init (why) error', err));
    }

    return () => {
      try {
        if (introEditor.current) {
          // save data back to fallback before destroy
          try { setIntroFallback(introEditor.current.getData() || ''); } catch {}
          introEditor.current.destroy();
          introEditor.current = null;
        }
        if (whyEditor.current) {
          try { setWhyFallback(whyEditor.current.getData() || ''); } catch {}
          whyEditor.current.destroy();
          whyEditor.current = null;
        }
      } catch (e) {
        // ignore
      }
    };
  }, [isCkLoaded]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value } as FormState));
  }

  function validate(): boolean {
    const err: Record<string, string> = {};

    // header (oneLiner) VARCHAR(100) not null
    if (!form.oneLiner || !form.oneLiner.trim()) err.oneLiner = 'Header is required';
    else if (form.oneLiner.length > 100) err.oneLiner = 'Header must be <= 100 characters';

    // name VARCHAR(100) NOT NULL
    if (!form.artistName || !form.artistName.trim()) err.artistName = 'Artist name is required';
    else if (form.artistName.length > 100) err.artistName = 'Name must be <= 100 characters';

    // phone phnum VARCHAR(15)
    if (form.phone && form.phone.length > 15) err.phone = 'Phone number must be <= 15 characters';

    // email UNIQUE NOT NULL, simple format and length check (uniqueness must be enforced server-side)
    if (!form.email || !form.email.trim()) err.email = 'Email is required';
    else if (form.email.length > 100) err.email = 'Email must be <= 100 characters';
    else {
      const emailRe = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
      if (!emailRe.test(form.email)) err.email = 'Invalid email format';
    }

    // stageName VARCHAR(50)
    if (form.stageName && form.stageName.length > 50) err.stageName = 'Stage name must be <= 50 characters';

    // verificationDate is validated by input type=date; optional

    // baseLocation VARCHAR(20)
    if (form.baseLocation && form.baseLocation.length > 20) err.baseLocation = 'Base location must be <= 20 characters';

    // stageIndex -> craftScore numeric
    if (form.craftScore) {
      const n = Number(form.craftScore);
      if (!Number.isInteger(n)) err.craftScore = 'Spotlight index must be an integer';
    }

    // languages - each lang max 20
    if (form.languages) {
      const parts = form.languages.split(',').map(s => s.trim()).filter(Boolean);
      const bad = parts.find(p => p.length > 20);
      if (bad) err.languages = 'Each language must be <= 20 characters';
    }

    // youtube & instagram max length 100 and basic URL check if present
    const checkUrl = (val: string) => {
      try { new URL(val); return true; } catch { return false; }
    };
    if (form.youtubeLink && form.youtubeLink.length > 100) err.youtubeLink = 'Youtube link must be <= 100 characters';
    else if (form.youtubeLink && !checkUrl(form.youtubeLink)) err.youtubeLink = 'Youtube link must be a valid URL';

    if (form.instagramLink && form.instagramLink.length > 100) err.instagramLink = 'Instagram link must be <= 100 characters';
    else if (form.instagramLink && !checkUrl(form.instagramLink)) err.instagramLink = 'Instagram link must be a valid URL';

    // introduction / whyBookArtist - we store as blob; check modest size limit (client-side)
    const introLen = (introEditor.current ? (introEditor.current.getData() || '').length : introFallback.length);
    const whyLen = (whyEditor.current ? (whyEditor.current.getData() || '').length : whyFallback.length);
    if (introLen > 20000) err.introduction = 'Introduction is too long (max 20k chars)';
    if (whyLen > 20000) err.whyBookArtist = 'Why book artist is too long (max 20k chars)';

    setErrors(err);
    return Object.keys(err).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const introHtml = introEditor.current ? introEditor.current.getData() : introFallback;
    const whyHtml = whyEditor.current ? whyEditor.current.getData() : whyFallback;

    const payload = {
      ...form,
      introduction: introHtml,
      whyBookArtist: whyHtml,
    };

    // For now just log the data. Replace with API call as needed.
    // Note: Email uniqueness & referential integrity (artistDetails, artistLanguages) must be enforced server-side.
    console.log('Add artist payload (validated):', payload);
    alert('Artist payload validated and logged to console.');
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl md:text-3xl font-semibold">Add Artist</h1>
        <Link to="/all-artists" className="text-sm btn btn-ghost">Back to artists</Link>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <section>
            <h2 className="text-lg font-medium mb-3">Basic information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-2 rounded">
                <label className="block text-sm font-medium mb-1">Artist Name <span className="text-red-500">*</span></label>
                <input aria-required="true" name="artistName" value={form.artistName} onChange={handleChange} className={inputClass} placeholder="Full name" />
                {errors.artistName && <p className="text-sm text-red-500 mt-1">{errors.artistName}</p>}
              </div>

              <div className="p-2 rounded">
                <label className="block text-sm font-medium mb-1">Artist one liner / header <span className="text-red-500">*</span></label>
                <input aria-required="true" name="oneLiner" value={form.oneLiner} onChange={handleChange} className={inputClass} placeholder="Short header for listing" />
                {errors.oneLiner && <p className="text-sm text-red-500 mt-1">{errors.oneLiner}</p>}
              </div>

              <div className="p-2 rounded">
                <label className="block text-sm font-medium mb-1">Phone number</label>
                <input name="phone" value={form.phone} onChange={handleChange} className={inputClass} placeholder="+91-XXXXXXXXXX" />
                {errors.phone && <p className="text-sm text-red-500 mt-1">{errors.phone}</p>}
              </div>

              <div className="p-2">
                <label className="block text-sm font-medium mb-1">Email <span className="text-red-500">*</span></label>
                <input aria-required="true" name="email" value={form.email} onChange={handleChange} className={inputClass} placeholder="name@example.com" />
                {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
              </div>

              <div className="p-2 rounded">
                <label className="block text-sm font-medium mb-1">Stage Name</label>
                <input name="stageName" value={form.stageName} onChange={handleChange} className={inputClass} placeholder="Optional" />
                {errors.stageName && <p className="text-sm text-red-500 mt-1">{errors.stageName}</p>}
              </div>

              <div className="p-2 rounded">
                <label className="block text-sm font-medium mb-1">Spotlight index / Craft score</label>
                <input name="craftScore" value={form.craftScore} onChange={handleChange} className={inputClass} placeholder="Numeric score or index" />
                {errors.craftScore && <p className="text-sm text-red-500 mt-1">{errors.craftScore}</p>}
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-medium mb-3">Skills & Ratings</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-2 rounded">
                <label className="block text-sm font-medium mb-1">Musical Skills</label>
                <input name="musicalSkills" value={form.musicalSkills} onChange={handleChange} className={inputClass} placeholder="e.g. Guitar, Vocals" />
              </div>

              <div className="p-2 rounded">
                <label className="block text-sm font-medium mb-1">Stage performance</label>
                <input name="stagePerformance" value={form.stagePerformance} onChange={handleChange} className={inputClass} />
              </div>

              <div className="p-2 rounded">
                <label className="block text-sm font-medium mb-1">Crowd Engagement</label>
                <input name="crowdEngagement" value={form.crowdEngagement} onChange={handleChange} className={inputClass} />
              </div>

              <div className="p-2 rounded">
                <label className="block text-sm font-medium mb-1">Professionalism</label>
                <input name="professionalism" value={form.professionalism} onChange={handleChange} className={inputClass} />
              </div>

              <div className="p-2 rounded">
                <label className="block text-sm font-medium mb-1">Punctuality</label>
                <input name="punctuality" value={form.punctuality} onChange={handleChange} className={inputClass} />
              </div>

              <div className="p-2 rounded">
                <label className="block text-sm font-medium mb-1">Reality check</label>
                <input name="realityCheck" value={form.realityCheck} onChange={handleChange} className={inputClass} />
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-medium mb-3">Location, types & links</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-2 rounded">
                <label className="block text-sm font-medium mb-1">Verification date</label>
                <input type="date" name="verificationDate" value={form.verificationDate} onChange={handleChange} className={inputClass} />
              </div>

              <div className="p-2 rounded">
                <label className="block text-sm font-medium mb-1">Base location</label>
                <input name="baseLocation" value={form.baseLocation} onChange={handleChange} className={inputClass} />
                {errors.baseLocation && <p className="text-sm text-red-500 mt-1">{errors.baseLocation}</p>}
              </div>

              <div className="p-2 rounded">
                <label className="block text-sm font-medium mb-1">Languages</label>
                <input name="languages" value={form.languages} onChange={handleChange} className={inputClass} placeholder="Comma separated" />
                {errors.languages && <p className="text-sm text-red-500 mt-1">{errors.languages}</p>}
              </div>

              <div className="p-2 rounded">
                <label className="block text-sm font-medium mb-1">Musician type</label>
                <input name="musicianType" value={form.musicianType} onChange={handleChange} className={inputClass} />
              </div>

              <div className="p-2 rounded">
                <label className="block text-sm font-medium mb-1">Performance type</label>
                <input name="performanceType" value={form.performanceType} onChange={handleChange} className={inputClass} />
              </div>

              <div className="p-2 rounded">
                <label className="block text-sm font-medium mb-1">Genre Performed</label>
                <input name="genres" value={form.genres} onChange={handleChange} className={inputClass} placeholder="Comma separated" />
              </div>

              <div className="md:col-span-2 p-2 rounded">
                <label className="block text-sm font-medium mb-1">Youtube Performance Video - Master Crafters link</label>
                <input name="youtubeLink" value={form.youtubeLink} onChange={handleChange} className={inputClass} placeholder="https://..." />
                {errors.youtubeLink && <p className="text-sm text-red-500 mt-1">{errors.youtubeLink}</p>}
              </div>

              <div className="md:col-span-1 p-2 rounded">
                <label className="block text-sm font-medium mb-1">Instagram profile link</label>
                <input name="instagramLink" value={form.instagramLink} onChange={handleChange} className={inputClass} placeholder="https://instagram.com/..." />
                {errors.instagramLink && <p className="text-sm text-red-500 mt-1">{errors.instagramLink}</p>}
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-medium mb-3">Introduction</h2>
            <div className="mb-2 text-sm text-muted">Use the rich-text editor below. If the editor is still loading you can type into the fallback textarea.</div>
            {isCkLoaded ? (
              <div ref={introRef} id="intro-editor" className="border rounded p-2 min-h-[140px] bg-white" />
            ) : (
              <textarea value={introFallback} onChange={e => setIntroFallback(e.target.value)} className={textareaClass} placeholder="Introduction - plain text fallback" />
            )}
            {errors.introduction && <p className="text-sm text-red-500 mt-1">{errors.introduction}</p>}
          </section>

          <section>
            <h2 className="text-lg font-medium mb-3">Why book artist</h2>
            <div className="mb-2 text-sm text-muted">Explain why clients should book this artist. Rich editor available when loaded.</div>
            {isCkLoaded ? (
              <div ref={whyRef} id="why-editor" className="border rounded p-2 min-h-[140px] bg-white" />
            ) : (
              <textarea value={whyFallback} onChange={e => setWhyFallback(e.target.value)} className={textareaClass} placeholder="Why book artist - plain text fallback" />
            )}
            {errors.whyBookArtist && <p className="text-sm text-red-500 mt-1">{errors.whyBookArtist}</p>}
          </section>

          <div className="flex items-center justify-end gap-3">
            <button
              type="button"
              className="px-4 py-2 rounded-md bg-gradient-to-r from-purple-600 to-indigo-500 text-white"
              onClick={() => { setForm(DEFAULT_STATE); setIntroFallback(''); setWhyFallback(''); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            >
              Reset
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-md bg-gradient-to-r from-purple-600 to-indigo-500 text-white hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              Save Artist
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
