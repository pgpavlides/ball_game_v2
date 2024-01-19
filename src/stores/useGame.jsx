import { create } from "zustand";

export default create((set) => {
 return {
   count: 9,
   blocksPerRow: 3,
   blockSpacing: 4,
   phase: "ready",

   trap1: true,
   trap2: false,
   trap3: false,
   trap4: false,
   trap5: false,
   trap6: false,
   trap7: false,
   trap8: false,
   trap9: false,
   trap10: false,
   trap11: false,

   start: () => {
     set(() => {
       return {
         phase: "playing",
       };
     });
   },

   restart: () => {
     set(() => {
       return {
         phase: "ready",
       };
     });
   },

   end: () => {
     set(() => {
       return {
         phase: "ended",
       };
     });
   },

   updateCount: (newCount) => {
     set(() => {
       return {
         count: newCount,
       };
     });
   },

   updateBlocksPerRow: (newBlocksPerRow) => {
     set(() => {
       return {
         blocksPerRow: newBlocksPerRow,
       };
     });
   },

   updateBlockSpacing: (newBlockSpacing) => {
     set(() => {
       return {
         blockSpacing: newBlockSpacing,
       };
     });
   },

   updateTrap1: ( boolean ) => {
     set(() => {
       return { trap1: boolean };
     });
   },
   updateTrap2: ( boolean ) => {
    set(() => {
      return { trap2: boolean };
    });
  },
  updateTrap3: ( boolean ) => {
    set(() => {
      return { trap3: boolean };
    });
  },
  updateTrap4: ( boolean ) => {
    set(() => {
      return { trap4: boolean };
    });
  },
  updateTrap5: ( boolean ) => {
    set(() => {
      return { trap5: boolean };
    });
  },
  updateTrap6: ( boolean ) => {
    set(() => {
      return { trap6: boolean };
    });
  },
  updateTrap7: ( boolean ) => {
    set(() => {
      return { trap7: boolean };
    });
  },
  updateTrap8: ( boolean ) => {
    set(() => {
      return { trap8: boolean };
    });
  },
  updateTrap9: ( boolean ) => {
    set(() => {
      return { trap9: boolean };
    });
  },
  updateTrap10: ( boolean ) => {
    set(() => {
      return { trap10: boolean };
    });
  },
  updateTrap11: ( boolean ) => {
    set(() => {
      return { trap11: boolean };
    });
  },
  updateTrap12: ( boolean ) => {
    set(() => {
      return { trap12: boolean };
    });
  },

 };
});