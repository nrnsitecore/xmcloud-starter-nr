import React, { createContext, useContext, useState, useEffect } from 'react';
import { getVisitorType, setVisitorType, VisitorType } from 'lib/visitorCookie';

type VisitorContextType = {
  visitorType: VisitorType;
  setType: (type: VisitorType) => void;
};

const VisitorContext = createContext<VisitorContextType | undefined>(undefined);

export const VisitorProvider = ({ children }: { children: React.ReactNode }) => {
  const [visitorType, setVisitorTypeState] = useState<VisitorType>('personal');

  useEffect(() => {
    const type = getVisitorType();
    setVisitorTypeState(type);
  }, []);

  const setType = (type: VisitorType) => {
    setVisitorType(type);         
    setVisitorTypeState(type);     
  };

  return (
    <VisitorContext.Provider value={{ visitorType, setType }}>
      {children}
    </VisitorContext.Provider>
  );
};

export const useVisitor = (): VisitorContextType => {
  const context = useContext(VisitorContext);
  if (!context) {
    throw new Error('useVisitor must be used within a VisitorProvider');
  }
  return context;
};