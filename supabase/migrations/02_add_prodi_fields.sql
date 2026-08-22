-- Menambahkan kolom konsentrasi dan bg_image ke tabel study_programs
ALTER TABLE public.study_programs
ADD COLUMN concentration TEXT,
ADD COLUMN bg_image TEXT;
