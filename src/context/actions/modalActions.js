// ::: MODAL UPLOAD ACTION :::
export const openModalUpload = () => ({ type: 'OPEN_MODAL_UPLOAD' });

export const closeModalUpload = () => ({ type: 'CLOSE_MODAL_UPLOAD' });

// ::: MODAL REVIEW ACTION :::
export const openModalReview = () => ({ type: 'OPEN_MODAL_REVIEW' });

export const closeModalReview = () => ({ type: 'CLOSE_MODAL_REVIEW' });

export const getPlantId = (data) => ({ type: 'GET_PLANT_ID', payload: data });

// ::: MODAL PILIH ALAMAT ACTION :::
export const openModalPilihAlamat = () => ({ type: 'OPEN_MODAL_PILIH_ALAMAT' });

export const closeModalPilihAlamat = () => ({
  type: 'CLOSE_MODAL_PILIH_ALAMAT',
});

// ::: MODAL TAMBAH ALAMAT ACTION :::
export const openModalTambahAlamat = () => ({
  type: 'OPEN_MODAL_TAMBAH_ALAMAT',
});

export const closeModalTambahAlamat = () => ({
  type: 'CLOSE_MODAL_TAMBAH_ALAMAT',
});

// ::: MODAL GANTI NAMA ACTION :::
export const openModalGantiNama = () => ({ type: 'OPEN_MODAL_GANTI_NAMA' });

export const closeModalGantiNama = () => ({
  type: 'CLOSE_MODAL_GANTI_NAMA',
});

// ::: MODAL GANTI GENDER ACTION :::
export const openModalGantiGender = () => ({
  type: 'OPEN_MODAL_GANTI_GENDER',
});

export const closeModalGantiGender = () => ({
  type: 'CLOSE_MODAL_GANTI_GENDER',
});

// ::: MODAL GANTI NOMOR ACTION :::
export const openModalGantiNomor = () => ({
  type: 'OPEN_MODAL_GANTI_NOMOR',
});

export const closeModalGantiNomor = () => ({
  type: 'CLOSE_MODAL_GANTI_NOMOR',
});

// ::: MODAL GANTI BIRTHDATE ACTION :::
export const openModalGantiBirthdate = () => ({
  type: 'OPEN_MODAL_GANTI_BIRTHDATE',
});

export const closeModalGantiBirthdate = () => ({
  type: 'CLOSE_MODAL_GANTI_BIRTHDATE',
});
