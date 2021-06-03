export const modalUploadReducer = (state, action) => {
  switch (action.type) {
    case "OPEN_MODAL_UPLOAD":
      return !state;

    case "CLOSE_MODAL_UPLOAD":
      return !state;

    default:
      return state;
  }
};

export const modalReviewReducer = (state, action) => {
  switch (action.type) {
    case "OPEN_MODAL_REVIEW":
      return !state;

    case "CLOSE_MODAL_REVIEW":
      return !state;

    default:
      return state;
  }
};

export const modalPilihAlamatReducer = (state, action) => {
  switch (action.type) {
    case "OPEN_MODAL_PILIH_ALAMAT":
      return !state;

    case "CLOSE_MODAL_PILIH_ALAMAT":
      return !state;

    default:
      return state;
  }
};

export const modalTambahAlamatReducer = (state, action) => {
  switch (action.type) {
    case "OPEN_MODAL_TAMBAH_ALAMAT":
      return !state;

    case "CLOSE_MODAL_TAMBAH_ALAMAT":
      return !state;

    default:
      return state;
  }
};

export const modalGantiNamaReducer = (state, action) => {
  switch (action.type) {
    case "OPEN_MODAL_GANTI_NAMA":
      return !state;

    case "CLOSE_MODAL_GANTI_NAMA":
      return !state;

    default:
      return state;
  }
};

export const modalPilihNamaReducer = (state, action) => {
  switch (action.type) {
    case "OPEN_MODAL_PILIH_NAMA":
      return !state;

    case "CLOSE_MODAL_PILIH_NAMA":
      return !state;

    default:
      return state;
  }
};
