
'use client';

import { useState } from 'react';
import styles from './page.module.css';

// Importar componentes manualmente (comentados mientras no estén desarrollados)
import OnClickDemo from './mouse/OnClickDemo';

import OnContextMenuDemo from './mouse/OnContextMenuDemo';
import OnMouseMoveDemo from './mouse/OnMouseMoveDemo';
import OnSubmitDemo from './teclado/OnSubmitDemo';
import OnSelectDemo from './teclado/OnSelectDemo';
/*
import OnDoubleClickDemo from './mouse/OnDoubleClickDemo';
import OnAuxClickDemo from './mouse/OnAuxClickDemo';
import OnMouseEnterDemo from './mouse/OnMouseEnterDemo';
import OnMouseLeaveDemo from './mouse/OnMouseLeaveDemo';
import OnMouseOverDemo from './mouse/OnMouseOverDemo';
import OnMouseOutDemo from './mouse/OnMouseOutDemo';
import OnMouseDownDemo from './mouse/OnMouseDownDemo';
import OnMouseUpDemo from './mouse/OnMouseUpDemo';
import OnDragDemo from './mouse/OnDragDemo';
import OnDragStartDemo from './mouse/OnDragStartDemo';
import OnDragEndDemo from './mouse/OnDragEndDemo';
import OnDragEnterDemo from './mouse/OnDragEnterDemo';
import OnDragLeaveDemo from './mouse/OnDragLeaveDemo';
import OnDragOverDemo from './mouse/OnDragOverDemo';
import OnDropDemo from './mouse/OnDropDemo';
import OnWheelDemo from './mouse/OnWheelDemo';
import OnScrollDemo from './mouse/OnScrollDemo';
import OnGotPointerCaptureDemo from './mouse/OnGotPointerCaptureDemo';
import OnLostPointerCaptureDemo from './mouse/OnLostPointerCaptureDemo';
import OnPointerDownDemo from './mouse/OnPointerDownDemo';
import OnPointerUpDemo from './mouse/OnPointerUpDemo';
import OnKeyDownDemo from './teclado/OnKeyDownDemo';
import OnKeyUpDemo from './teclado/OnKeyUpDemo';
import OnKeyPressDemo from './teclado/OnKeyPressDemo';
import OnInputDemo from './teclado/OnInputDemo';
import OnChangeDemo from './teclado/OnChangeDemo';
import OnFocusDemo from './teclado/OnFocusDemo';
import OnBlurDemo from './teclado/OnBlurDemo';

import OnResetDemo from './teclado/OnResetDemo';
import OnInvalidDemo from './teclado/OnInvalidDemo';
import OnSelectDemo from './teclado/OnSelectDemo';
*/

// Mapa de componentes (comentado mientras no estén desarrollados)
const componentsMap: Record<string, React.ComponentType> = {
  onClick: OnClickDemo,
  onMouseMove: OnMouseMoveDemo,
  onSelect: OnSelectDemo,
  onContextMenu: OnContextMenuDemo

  /* 
    onDoubleClick: OnDoubleClickDemo
  onAuxClick: OnAuxClickDemo,
  onMouseEnter: OnMouseEnterDemo,
  onMouseLeave: OnMouseLeaveDemo,
  onMouseOver: OnMouseOverDemo,
  onMouseOut: OnMouseOutDemo,
  onMouseMove: OnMouseMoveDemo,
  onMouseDown: OnMouseDownDemo,
  onMouseUp: OnMouseUpDemo,
  onDrag: OnDragDemo,
  onDragStart: OnDragStartDemo,
  onDragEnd: OnDragEndDemo,
  onDragEnter: OnDragEnterDemo,
  onDragLeave: OnDragLeaveDemo,
  onDragOver: OnDragOverDemo,
  onDrop: OnDropDemo,
  onWheel: OnWheelDemo,
  onScroll: OnScrollDemo,
  onGotPointerCapture: OnGotPointerCaptureDemo,
  onLostPointerCapture: OnLostPointerCaptureDemo,
  onPointerDown: OnPointerDownDemo,
  onPointerUp: OnPointerUpDemo,
  onKeyDown: OnKeyDownDemo,
  onKeyUp: OnKeyUpDemo,
  onKeyPress: OnKeyPressDemo,
  onInput: OnInputDemo,
  onChange: OnChangeDemo,
  onFocus: OnFocusDemo,
  onBlur: OnBlurDemo,
  
  onReset: OnResetDemo,
  onInvalid: OnInvalidDemo,
  onSelect: OnSelectDemo,
  */
};

// Código de ejemplo para todos los eventos
const exampleCodeMap: Record<string, { code: string; explanation: string }> = {
  onClick: {
    code: `import { useState } from 'react';

export default function OnClickDemo() {
  const [clickCount, setClickCount] = useState(0);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
  const [lastClickTime, setLastClickTime] = useState<Date | null>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setClickCount(prev => prev + 1);
    setClickPosition({ x: e.clientX, y: e.clientY });
    setLastClickTime(new Date());
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>onClick Demo</h2>
      <p>El evento onClick se dispara cuando se hace clic en un elemento.</p>
      
      <div style={{ marginBottom: '20px' }}>
        <button 
          onClick={handleClick}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Haz clic aquí
        </button>
      </div>

      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '15px', 
        borderRadius: '4px',
        border: '1px solid #dee2e6'
      }}>
        <h3>Contador de clicks:</h3>
        <p>Cantidad total de clicks: <strong>{clickCount}</strong></p>
        
        <h3>Última posición de click:</h3>
        <p>X: {clickPosition.x}, Y: {clickPosition.y}</p>
        
        <h3>Último click:</h3>
        <p>{lastClickTime ? lastClickTime.toLocaleTimeString() : 'Nunca'}</p>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>Instrucciones:</h3>
        <ul>
          <li>Haz clic en el botón para incrementar el contador</li>
          <li>Se registrará la posición donde hiciste clic</li>
          <li>Se mostrará la hora del último click</li>
        </ul>
      </div>
    </div>
  );
}`,
    explanation: "El evento onClick se dispara cuando se hace clic en un elemento. Es útil para manejar interacciones de usuario como botones, links o cualquier otro elemento interactivo."
  },
  onDoubleClick: {
    code: `import { useState } from 'react';

export default function OnDoubleClickDemo() {
  const [doubleClickCount, setDoubleClickCount] = useState(0);
  const [lastDoubleClickTime, setLastDoubleClickTime] = useState<Date | null>(null);
  const [isWaiting, setIsWaiting] = useState(false);
  const [message, setMessage] = useState("Haz doble clic en el área de abajo");

  const handleDoubleClick = () => {
    setDoubleClickCount(prev => prev + 1);
    setLastDoubleClickTime(new Date());
    setMessage("¡Doble clic detectado!");
    setIsWaiting(true);
    
    // Resetear mensaje después de un tiempo
    setTimeout(() => {
      setMessage("Haz doble clic en el área de abajo");
      setIsWaiting(false);
    }, 1000);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>onDoubleClick Demo</h2>
      <p>El evento onDoubleClick se dispara cuando se hace doble clic en un elemento.</p>
      
      <div 
        onDoubleClick={handleDoubleClick}
        style={{
          width: '300px',
          height: '150px',
          border: '2px dashed #007bff',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: isWaiting ? '#d4edda' : '#f8f9fa',
          transition: 'background-color 0.3s ease',
          cursor: 'pointer',
          userSelect: 'none'
        }}
      >
        <p style={{ 
          textAlign: 'center', 
          color: '#333',
          fontWeight: isWaiting ? 'bold' : 'normal',
          fontSize: '16px'
        }}>
          {message}
        </p>
      </div>

      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '15px', 
        borderRadius: '4px',
        border: '1px solid #dee2e6',
        marginTop: '20px'
      }}>
        <h3>Contador de dobles clics:</h3>
        <p>Total de dobles clics: <strong>{doubleClickCount}</strong></p>
        
        <h3>Último doble clic:</h3>
        <p>{lastDoubleClickTime ? lastClickTime.toLocaleTimeString() : 'Nunca'}</p>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>Instrucciones:</h3>
        <ul>
          <li>Haz doble clic (dos clics rápidos) en el área sombreada</li>
          <li>Se contabilizarán los dobles clics</li>
          <li>El área cambiará de color brevemente cuando se detecte un doble clic</li>
        </ul>
      </div>
    </div>
  );
}`,
    explanation: "El evento onDoubleClick se activa cuando un usuario hace doble clic rápidamente en un elemento. Es comúnmente usado para acciones como abrir archivos o maximizar ventanas."
  },
  onContextMenu: {
    code: `import { useState } from 'react';

export default function OnContextMenuDemo() {
  const [contextMenu, setContextMenu] = useState<{ x: number; y: number; visible: boolean }>({
    x: 0,
    y: 0,
    visible: false
  });

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setContextMenu({
      x: e.clientX,
      y: e.clientY,
      visible: true
    });
  };

  const hideContextMenu = () => {
    setContextMenu({ x: 0, y: 0, visible: false });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>onContextMenu Demo</h2>
      <p>El evento onContextMenu se dispara cuando se abre el menú contextual (clic derecho).</p>
      
      <div 
        onContextMenu={handleContextMenu}
        onClick={hideContextMenu}
        style={{
          width: '100%',
          height: '200px',
          border: '2px solid #ccc',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f8f9fa',
          position: 'relative'
        }}
      >
        <p>Haz clic derecho aquí para abrir menú contextual</p>
        
        {contextMenu.visible && (
          <div 
            style={{
              position: 'fixed',
              top: contextMenu.y,
              left: contextMenu.x,
              backgroundColor: 'white',
              border: '1px solid #ccc',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
              zIndex: 1000,
              minWidth: '150px'
            }}
          >
            <div style={{ padding: '8px', borderBottom: '1px solid #eee', cursor: 'pointer' }}>Opción 1</div>
            <div style={{ padding: '8px', borderBottom: '1px solid #eee', cursor: 'pointer' }}>Opción 2</div>
            <div style={{ padding: '8px', cursor: 'pointer' }}>Opción 3</div>
          </div>
        )}
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>Instrucciones:</h3>
        <ul>
          <li>Haz clic derecho en el área sombreada</li>
          <li>Se mostrará un menú contextual personalizado</li>
          <li>El menú se cierra al hacer clic fuera de él</li>
        </ul>
      </div>
    </div>
  );
}`,
    explanation: "El evento onContextMenu se dispara cuando se abre el menú contextual (generalmente con clic derecho). Puedes usar preventDefault() para sobreescribir el comportamiento predeterminado."
  },
  onAuxClick: {
    code: `import { useState } from 'react';

export default function OnAuxClickDemo() {
  const [messages, setMessages] = useState<string[]>([]);

  const handleAuxClick = (e: React.MouseEvent) => {
    let message = '';
    switch(e.button) {
      case 1: // Botón central (rueda)
        message = 'Botón central del mouse';
        break;
      case 2: // Botón derecho
        message = 'Botón derecho del mouse';
        break;
      case 0: // Botón izquierdo
        message = 'Botón izquierdo del mouse';
        break;
      default:
        message = 'Botón auxiliar desconocido';
    }
    
    setMessages(prev => [...prev, message + ' - ' + new Date().toLocaleTimeString()]);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>onAuxClick Demo</h2>
      <p>El evento onAuxClick se dispara cuando se hace clic con un botón auxiliar del mouse.</p>
      
      <div 
        onAuxClick={handleAuxClick}
        style={{
          width: '100%',
          height: '200px',
          border: '2px solid #ccc',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f8f9fa',
          cursor: 'pointer'
        }}
      >
        <p>Haz clic con diferentes botones del mouse</p>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>Registros de clics:</h3>
        <div style={{ maxHeight: '200px', overflowY: 'auto', border: '1px solid #ddd', padding: '10px' }}>
          {messages.length > 0 ? (
            messages.map((msg, index) => <div key={index}>{msg}</div>)
          ) : (
            <p>No hay registros aún</p>
          )}
        </div>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>Instrucciones:</h3>
        <ul>
          <li>Haz clic con diferentes botones del mouse (izquierdo, derecho, rueda)</li>
          <li>Se registrarán todos los clics en la lista</li>
          <li>El botón central (rueda) es el más común para onAuxClick</li>
        </ul>
      </div>
    </div>
  );
}`,
    explanation: "El evento onAuxClick se activa cuando se hace clic con un botón auxiliar del mouse, generalmente el botón central (rueda). Es útil para acciones alternativas como abrir enlaces en nuevas pestañas."
  },
  onMouseEnter: {
    code: `import { useState } from 'react';

export default function OnMouseEnterDemo() {
  const [hoverCount, setHoverCount] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={{ padding: '20px' }}>
      <h2>onMouseEnter Demo</h2>
      <p>El evento onMouseEnter se dispara cuando el cursor entra en un elemento.</p>
      
      <div 
        onMouseEnter={() => {
          setHoverCount(prev => prev + 1);
          setIsHovered(true);
        }}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          width: '300px',
          height: '150px',
          border: '2px solid #007bff',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: isHovered ? '#e7f3ff' : '#f8f9fa',
          transition: 'background-color 0.3s ease',
          cursor: 'pointer'
        }}
      >
        <p style={{ 
          color: isHovered ? '#0056b3' : '#333',
          fontWeight: isHovered ? 'bold' : 'normal'
        }}>
          Pasa el mouse aquí
        </p>
      </div>

      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '15px', 
        borderRadius: '4px',
        border: '1px solid #dee2e6',
        marginTop: '20px'
      }}>
        <h3>Contador de entradas:</h3>
        <p>Total de veces que pasaste el mouse: <strong>{hoverCount}</strong></p>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>Instrucciones:</h3>
        <ul>
          <li>Pasa el mouse sobre el área sombreada</li>
          <li>Se contabilizarán cada vez que entres al área</li>
          <li>El área cambiará de color mientras el mouse esté encima</li>
        </ul>
      </div>
    </div>
  );
}`,
    explanation: "El evento onMouseEnter se activa cuando el cursor entra en un elemento. A diferencia de onMouseOver, no se propaga hacia los elementos hijos."
  },
  onMouseLeave: {
    code: `import { useState } from 'react';

export default function OnMouseLeaveDemo() {
  const [leaveCount, setLeaveCount] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={{ padding: '20px' }}>
      <h2>onMouseLeave Demo</h2>
      <p>El evento onMouseLeave se dispara cuando el cursor sale de un elemento.</p>
      
      <div 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setLeaveCount(prev => prev + 1);
          setIsHovered(false);
        }}
        style={{
          width: '300px',
          height: '150px',
          border: '2px solid #28a745',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: isHovered ? '#d4edda' : '#f8f9fa',
          transition: 'background-color 0.3s ease',
          cursor: 'pointer'
        }}
      >
        <p style={{ 
          color: isHovered ? '#155724' : '#333',
          fontWeight: isHovered ? 'bold' : 'normal'
        }}>
          Pasa el mouse y luego sal
        </p>
      </div>

      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '15px', 
        borderRadius: '4px',
        border: '1px solid #dee2e6',
        marginTop: '20px'
      }}>
        <h3>Contador de salidas:</h3>
        <p>Total de veces que saliste del área: <strong>{leaveCount}</strong></p>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>Instrucciones:</h3>
        <ul>
          <li>Pasa el mouse sobre el área sombreada</li>
          <li>Luego saca el mouse del área</li>
          <li>Se contabilizarán cada vez que salgas del área</li>
        </ul>
      </div>
    </div>
  );
}`,
    explanation: "El evento onMouseLeave se dispara cuando el cursor sale de un elemento. Es el complemento de onMouseEnter."
  },
  onMouseOver: {
    code: `import { useState } from 'react';

export default function OnMouseOverDemo() {
  const [overCount, setOverCount] = useState(0);
  const [isOver, setIsOver] = useState(false);

  return (
    <div style={{ padding: '20px' }}>
      <h2>onMouseOver Demo</h2>
      <p>El evento onMouseOver se dispara cuando el mouse se mueve sobre un elemento (se propaga).</p>
      
      <div 
        onMouseOver={() => {
          setOverCount(prev => prev + 1);
          setIsOver(true);
        }}
        onMouseOut={() => setIsOver(false)}
        style={{
          width: '300px',
          height: '150px',
          border: '2px solid #ffc107',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: isOver ? '#fff3cd' : '#f8f9fa',
          transition: 'background-color 0.3s ease',
          cursor: 'pointer'
        }}
      >
        <p style={{ 
          color: isOver ? '#856404' : '#333',
          fontWeight: isOver ? 'bold' : 'normal'
        }}>
          Mueve el mouse aquí
        </p>
      </div>

      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '15px', 
        borderRadius: '4px',
        border: '1px solid #dee2e6',
        marginTop: '20px'
      }}>
        <h3>Contador de mouse over:</h3>
        <p>Total de veces que el mouse pasó sobre el área: <strong>{overCount}</strong></p>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>Instrucciones:</h3>
        <ul>
          <li>Mueve el mouse sobre el área sombreada</li>
          <li>Se contabilizarán cada vez que el mouse pase sobre el área</li>
          <li>Este evento se propaga a elementos hijos</li>
        </ul>
      </div>
    </div>
  );
}`,
    explanation: "El evento onMouseOver se activa cuando el mouse se mueve sobre un elemento. A diferencia de onMouseEnter, se propaga a elementos hijos."
  },
  onMouseOut: {
    code: `import { useState } from 'react';

export default function OnMouseOutDemo() {
  const [outCount, setOutCount] = useState(0);
  const [isOver, setIsOver] = useState(false);

  return (
    <div style={{ padding: '20px' }}>
      <h2>onMouseOut Demo</h2>
      <p>El evento onMouseOut se dispara cuando el mouse sale de un elemento (se propaga).</p>
      
      <div 
        onMouseOver={() => setIsOver(true)}
        onMouseOut={() => {
          setOutCount(prev => prev + 1);
          setIsOver(false);
        }}
        style={{
          width: '300px',
          height: '150px',
          border: '2px solid #fd7e14',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: isOver ? '#ffeaa7' : '#f8f9fa',
          transition: 'background-color 0.3s ease',
          cursor: 'pointer'
        }}
      >
        <p style={{ 
          color: isOver ? '#856404' : '#333',
          fontWeight: isOver ? 'bold' : 'normal'
        }}>
          Mueve el mouse aquí y fuera
        </p>
      </div>

      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '15px', 
        borderRadius: '4px',
        border: '1px solid #dee2e6',
        marginTop: '20px'
      }}>
        <h3>Contador de mouse out:</h3>
        <p>Total de veces que el mouse salió del área: <strong>{outCount}</strong></p>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>Instrucciones:</h3>
        <ul>
          <li>Mueve el mouse sobre el área sombreada</li>
          <li>Luego mueve el mouse fuera del área</li>
          <li>Se contabilizarán cada vez que el mouse salga del área</li>
          <li>Este evento se propaga a elementos hijos</li>
        </ul>
      </div>
    </div>
  );
}`,
    explanation: "El evento onMouseOut se dispara cuando el mouse sale de un elemento. A diferencia de onMouseLeave, se propaga a elementos hijos."
  },
  onMouseMove: {
    code: `import { useState } from 'react';

export default function OnMouseMoveDemo() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
    setIsMoving(true);
    setTimeout(() => setIsMoving(false), 100);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>onMouseMove Demo</h2>
      <p>El evento onMouseMove se dispara cuando el mouse se mueve sobre un elemento.</p>
      
      <div 
        onMouseMove={handleMouseMove}
        style={{
          width: '100%',
          height: '200px',
          border: '2px solid #6f42c1',
          borderRadius: '8px',
          position: 'relative',
          backgroundColor: '#f8f9fa',
          cursor: 'crosshair'
        }}
      >
        <div style={{
          position: 'absolute',
          left: position.x - 10,
          top: position.y - 10,
          width: '20px',
          height: '20px',
          backgroundColor: isMoving ? '#6f42c1' : '#adb5bd',
          borderRadius: '50%',
          transition: 'background-color 0.1s ease',
          pointerEvents: 'none'
        }}></div>
        
        <div style={{
          position: 'absolute',
          bottom: '10px',
          right: '10px',
          backgroundColor: 'rgba(255,255,255,0.8)',
          padding: '5px 10px',
          borderRadius: '4px',
          fontSize: '12px'
        }}>
          X: {position.x}, Y: {position.y}
        </div>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>Instrucciones:</h3>
        <ul>
          <li>Mueve el mouse dentro del área sombreada</li>
          <li>Se mostrará un punto que sigue al cursor</li>
          <li>Se actualizará la posición en tiempo real</li>
        </ul>
      </div>
    </div>
  );
}`,
    explanation: "El evento onMouseMove se activa continuamente mientras el mouse se mueve sobre un elemento. Útil para seguimiento de movimiento o efectos interactivos."
  },
  onMouseDown: {
    code: `import { useState } from 'react';

export default function OnMouseDownDemo() {
  const [isPressed, setIsPressed] = useState(false);
  const [pressCount, setPressCount] = useState(0);

  return (
    <div style={{ padding: '20px' }}>
      <h2>onMouseDown Demo</h2>
      <p>El evento onMouseDown se dispara cuando se presiona un botón del mouse.</p>
      
      <div 
        onMouseDown={() => {
          setIsPressed(true);
          setPressCount(prev => prev + 1);
        }}
        onMouseUp={() => setIsPressed(false)}
        style={{
          width: '300px',
          height: '150px',
          border: '2px solid #dc3545',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: isPressed ? '#f8d7da' : '#f8f9fa',
          transition: 'background-color 0.1s ease',
          cursor: 'pointer'
        }}
      >
        <p style={{ 
          color: isPressed ? '#721c24' : '#333',
          fontWeight: isPressed ? 'bold' : 'normal'
        }}>
          {isPressed ? '¡Botón presionado!' : 'Presiona cualquier botón del mouse'}
        </p>
      </div>

      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '15px', 
        borderRadius: '4px',
        border: '1px solid #dee2e6',
        marginTop: '20px'
      }}>
        <h3>Contador de presiones:</h3>
        <p>Total de veces que se presionó un botón: <strong>{pressCount}</strong></p>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>Instrucciones:</h3>
        <ul>
          <li>Presiona cualquier botón del mouse en el área sombreada</li>
          <li>El área cambiará de color mientras mantengas presionado</li>
          <li>Se contabilizarán cada vez que presiones un botón</li>
        </ul>
      </div>
    </div>
  );
}`,
    explanation: "El evento onMouseDown se dispara cuando se presiona un botón del mouse. Es útil para detectar cuándo comienza una interacción."
  },
  onMouseUp: {
    code: `import { useState } from 'react';

export default function OnMouseUpDemo() {
  const [releaseCount, setReleaseCount] = useState(0);
  const [isPressed, setIsPressed] = useState(false);

  return (
    <div style={{ padding: '20px' }}>
      <h2>onMouseUp Demo</h2>
      <p>El evento onMouseUp se dispara cuando se suelta un botón del mouse.</p>
      
      <div 
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => {
          setReleaseCount(prev => prev + 1);
          setIsPressed(false);
        }}
        style={{
          width: '300px',
          height: '150px',
          border: '2px solid #6c757d',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: isPressed ? '#e2e3e5' : '#f8f9fa',
          transition: 'background-color 0.1s ease',
          cursor: 'pointer'
        }}
      >
        <p style={{ 
          color: isPressed ? '#383d41' : '#333',
          fontWeight: isPressed ? 'bold' : 'normal'
        }}>
          Presiona y suelta el botón del mouse
        </p>
      </div>

      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '15px', 
        borderRadius: '4px',
        border: '1px solid #dee2e6',
        marginTop: '20px'
      }}>
        <h3>Contador de liberaciones:</h3>
        <p>Total de veces que se soltó un botón: <strong>{releaseCount}</strong></p>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>Instrucciones:</h3>
        <ul>
          <li>Presiona y suelta un botón del mouse en el área sombreada</li>
          <li>El área cambiará de color mientras mantengas presionado</li>
          <li>Se contabilizarán cada vez que sueltes un botón</li>
        </ul>
      </div>
    </div>
  );
}`,
    explanation: "El evento onMouseUp se dispara cuando se suelta un botón del mouse. Es útil para detectar cuándo termina una interacción."
  },
  onDrag: {
    code: `import { useState } from 'react';

export default function OnDragDemo() {
  const [dragStatus, setDragStatus] = useState('Arrastra el elemento');
  const [position, setPosition] = useState({ x: 50, y: 50 });

  const handleDragStart = (e: React.DragEvent) => {
    e.dataTransfer.setData('text/plain', 'element');
    setDragStatus('Arrastrando...');
  };

  const handleDrag = (e: React.DragEvent) => {
    setDragStatus('Elemento en movimiento');
  };

  const handleDragEnd = (e: React.DragEvent) => {
    setDragStatus('Arrastre finalizado');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>onDrag Demo</h2>
      <p>El evento onDrag se dispara durante el arrastre de un elemento.</p>
      
      <div style={{
        width: '100%',
        height: '200px',
        border: '2px dashed #007bff',
        borderRadius: '8px',
        position: 'relative',
        backgroundColor: '#f8f9fa',
        overflow: 'hidden'
      }}>
        <div 
          draggable
          onDragStart={handleDragStart}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          style={{
            position: 'absolute',
            left: \`\${position.x}px\`,
            top: \`\${position.y}px\`,
            width: '100px',
            height: '50px',
            backgroundColor: '#007bff',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '4px',
            cursor: 'move'
          }}
        >
          Arrástrame
        </div>
      </div>

      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '15px', 
        borderRadius: '4px',
        border: '1px solid #dee2e6',
        marginTop: '20px'
      }}>
        <h3>Estado de arrastre:</h3>
        <p>{dragStatus}</p>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>Instrucciones:</h3>
        <ul>
          <li>Arrastra el elemento azul dentro del área</li>
          <li>Observa cómo cambia el estado durante el arrastre</li>
          <li>El evento onDrag se dispara repetidamente durante el arrastre</li>
        </ul>
      </div>
    </div>
  );
}`,
    explanation: "El evento onDrag se activa repetidamente durante el arrastre de un elemento. Debe usarse junto con onDragStart y onDragEnd para funcionalidad completa."
  },
  onDragStart: {
    code: `import { useState } from 'react';

export default function OnDragStartDemo() {
  const [dragStartCount, setDragStartCount] = useState(0);
  const [status, setStatus] = useState('Preparado para arrastrar');

  const handleDragStart = (e: React.DragEvent) => {
    e.dataTransfer.setData('text/plain', 'drag-element');
    setDragStartCount(prev => prev + 1);
    setStatus('Inicio de arrastre detectado');
  };

  const handleDragEnd = () => {
    setStatus('Arrastre finalizado');
    setTimeout(() => setStatus('Preparado para arrastrar'), 1000);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>onDragStart Demo</h2>
      <p>El evento onDragStart se dispara cuando comienza el arrastre de un elemento.</p>
      
      <div style={{
        width: '100%',
        height: '200px',
        border: '2px dashed #28a745',
        borderRadius: '8px',
        position: 'relative',
        backgroundColor: '#f8f9fa',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div 
          draggable
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          style={{
            width: '120px',
            height: '60px',
            backgroundColor: '#28a745',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '4px',
            cursor: 'move'
          }}
        >
          Arrástrame
        </div>
      </div>

      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '15px', 
        borderRadius: '4px',
        border: '1px solid #dee2e6',
        marginTop: '20px'
      }}>
        <h3>Contador de inicio de arrastre:</h3>
        <p>Total de inicios de arrastre: <strong>{dragStartCount}</strong></p>
        <p>Estado actual: {status}</p>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>Instrucciones:</h3>
        <ul>
          <li>Comienza a arrastrar el elemento verde</li>
          <li>Se contabilizarán cada inicio de arrastre</li>
          <li>onDragStart se dispara una vez al comienzo del arrastre</li>
        </ul>
      </div>
    </div>
  );
}`,
    explanation: "El evento onDragStart se dispara cuando comienza el arrastre de un elemento. Es donde normalmente se configuran los datos que se van a transferir."
  },
  onDragEnd: {
    code: `import { useState } from 'react';

export default function OnDragEndDemo() {
  const [dragEndCount, setDragEndCount] = useState(0);
  const [status, setStatus] = useState('Preparado para arrastrar');

  const handleDragStart = (e: React.DragEvent) => {
    e.dataTransfer.setData('text/plain', 'drag-element');
    setStatus('Arrastrando...');
  };

  const handleDragEnd = () => {
    setDragEndCount(prev => prev + 1);
    setStatus('Fin de arrastre detectado');
    setTimeout(() => setStatus('Preparado para arrastrar'), 1500);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>onDragEnd Demo</h2>
      <p>El evento onDragEnd se dispara cuando termina el arrastre de un elemento.</p>
      
      <div style={{
        width: '100%',
        height: '200px',
        border: '2px dashed #dc3545',
        borderRadius: '8px',
        position: 'relative',
        backgroundColor: '#f8f9fa',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div 
          draggable
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          style={{
            width: '120px',
            height: '60px',
            backgroundColor: '#dc3545',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '4px',
            cursor: 'move'
          }}
        >
          Arrástrame
        </div>
      </div>

      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '15px', 
        borderRadius: '4px',
        border: '1px solid #dee2e6',
        marginTop: '20px'
      }}>
        <h3>Contador de fin de arrastre:</h3>
        <p>Total de fines de arrastre: <strong>{dragEndCount}</strong></p>
        <p>Estado actual: {status}</p>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>Instrucciones:</h3>
        <ul>
          <li>Arrastra el elemento rojo y suéltalo</li>
          <li>Se contabilizarán cada fin de arrastre</li>
          <li>onDragEnd se dispara una vez al finalizar el arrastre</li>
        </ul>
      </div>
    </div>
  );
}`,
    explanation: "El evento onDragEnd se dispara cuando termina el arrastre de un elemento. Es útil para limpiar estados o mostrar resultados finales."
  },
  onDragEnter: {
    code: `import { useState } from 'react';

export default function OnDragEnterDemo() {
  const [enterCount, setEnterCount] = useState(0);
  const [isOver, setIsOver] = useState(false);

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    setEnterCount(prev => prev + 1);
    setIsOver(true);
  };

  const handleDragLeave = () => {
    setIsOver(false);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>onDragEnter Demo</h2>
      <p>El evento onDragEnter se dispara cuando un objeto arrastrado entra en una zona objetivo.</p>
      
      <div 
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        style={{
          width: '100%',
          height: '200px',
          border: '2px solid #ffc107',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: isOver ? '#fff3cd' : '#f8f9fa',
          transition: 'background-color 0.3s ease'
        }}
      >
        <p style={{ 
          color: isOver ? '#856404' : '#333',
          fontWeight: isOver ? 'bold' : 'normal'
        }}>
          Arrastra algo aquí
        </p>
      </div>

      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '15px', 
        borderRadius: '4px',
        border: '1px solid #dee2e6',
        marginTop: '20px'
      }}>
        <h3>Contador de entradas de arrastre:</h3>
        <p>Total de veces que un objeto entró: <strong>{enterCount}</strong></p>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>Instrucciones:</h3>
        <ul>
          <li>Arrastra cualquier elemento sobre el área amarilla</li>
          <li>El área cambiará de color cuando entre un objeto</li>
          <li>Se contabilizarán cada entrada de objeto arrastrado</li>
        </ul>
      </div>
    </div>
  );
}`,
    explanation: "El evento onDragEnter se dispara cuando un objeto arrastrado entra en una zona objetivo. Debe usarse con onDragOver y onDragLeave para funcionalidad completa."
  },
  onDragLeave: {
    code: `import { useState } from 'react';

export default function OnDragLeaveDemo() {
  const [leaveCount, setLeaveCount] = useState(0);
  const [isOver, setIsOver] = useState(false);

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    setIsOver(true);
  };

  const handleDragLeave = () => {
    setLeaveCount(prev => prev + 1);
    setIsOver(false);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>onDragLeave Demo</h2>
      <p>El evento onDragLeave se dispara cuando un objeto arrastrado sale de una zona objetivo.</p>
      
      <div 
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        style={{
          width: '100%',
          height: '200px',
          border: '2px solid #fd7e14',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: isOver ? '#ffeaa7' : '#f8f9fa',
          transition: 'background-color 0.3s ease'
        }}
      >
        <p style={{ 
          color: isOver ? '#856404' : '#333',
          fontWeight: isOver ? 'bold' : 'normal'
        }}>
          Arrastra algo aquí y luego fuera
        </p>
      </div>

      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '15px', 
        borderRadius: '4px',
        border: '1px solid #dee2e6',
        marginTop: '20px'
      }}>
        <h3>Contador de salidas de arrastre:</h3>
        <p>Total de veces que un objeto salió: <strong>{leaveCount}</strong></p>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>Instrucciones:</h3>
        <ul>
          <li>Arrastra cualquier elemento sobre el área naranja</li>
          <li>Luego saca el elemento del área</li>
          <li>Se contabilizarán cada salida de objeto arrastrado</li>
        </ul>
      </div>
    </div>
  );
}`,
    explanation: "El evento onDragLeave se dispara cuando un objeto arrastrado sale de una zona objetivo. Es el complemento de onDragEnter."
  },
  onDragOver: {
    code: `import { useState } from 'react';

export default function OnDragOverDemo() {
  const [overCount, setOverCount] = useState(0);
  const [isOver, setIsOver] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setOverCount(prev => prev + 1);
    setIsOver(true);
    setTimeout(() => setIsOver(false), 100);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>onDragOver Demo</h2>
      <p>El evento onDragOver se dispara repetidamente mientras un objeto arrastrado está sobre una zona objetivo.</p>
      
      <div 
        onDragOver={handleDragOver}
        style={{
          width: '100%',
          height: '200px',
          border: '2px solid #6f42c1',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: isOver ? '#e2e3e5' : '#f8f9fa',
          transition: 'background-color 0.3s ease'
        }}
      >
        <p style={{ 
          color: isOver ? '#6c757d' : '#333',
          fontWeight: isOver ? 'bold' : 'normal'
        }}>
          Arrastra algo sobre esta área
        </p>
      </div>

      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '15px', 
        borderRadius: '4px',
        border: '1px solid #dee2e6',
        marginTop: '20px'
      }}>
        <h3>Contador de arrastre sobre:</h3>
        <p>Total de veces que un objeto estuvo sobre: <strong>{overCount}</strong></p>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>Instrucciones:</h3>
        <ul>
          <li>Arrastra cualquier elemento sobre el área morada</li>
          <li>Mantén el objeto sobre el área para ver más eventos</li>
          <li>onDragOver se dispara repetidamente durante el arrastre sobre</li>
        </ul>
      </div>
    </div>
  );
}`,
    explanation: "El evento onDragOver se dispara repetidamente mientras un objeto arrastrado está sobre una zona objetivo. Debe llamar a preventDefault() para permitir soltar."
  },
  onDrop: {
    code: `import { useState } from 'react';

export default function OnDropDemo() {
  const [dropCount, setDropCount] = useState(0);
  const [droppedData, setDroppedData] = useState<string | null>(null);
  const [isOver, setIsOver] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsOver(true);
  };

  const handleDragLeave = () => {
    setIsOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsOver(false);
    setDropCount(prev => prev + 1);
    const data = e.dataTransfer.getData('text/plain');
    setDroppedData(data);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>onDrop Demo</h2>
      <p>El evento onDrop se dispara cuando se suelta un objeto arrastrado sobre una zona objetivo.</p>
      
      <div 
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        style={{
          width: '100%',
          height: '200px',
          border: '2px solid #17a2b8',
          borderRadius: '8px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: isOver ? '#d1ecf1' : '#f8f9fa',
          transition: 'background-color 0.3s ease'
        }}
      >
        <p style={{ 
          color: isOver ? '#0c5460' : '#333',
          fontWeight: isOver ? 'bold' : 'normal',
          textAlign: 'center'
        }}>
          Suelta algo aquí
        </p>
        {droppedData && (
          <p style={{ marginTop: '10px', color: '#0c5460' }}>
            Último dato soltado: {droppedData}
          </p>
        )}
      </div>

      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '15px', 
        borderRadius: '4px',
        border: '1px solid #dee2e6',
        marginTop: '20px'
      }}>
        <h3>Contador de soltados:</h3>
        <p>Total de objetos soltados: <strong>{dropCount}</strong></p>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>Instrucciones:</h3>
        <ul>
          <li>Arrastra cualquier elemento sobre el área azul claro</li>
          <li>Suéltenlo dentro del área para activar onDrop</li>
          <li>Se contabilizarán cada objeto soltado</li>
        </ul>
      </div>
    </div>
  );
}`,
    explanation: "El evento onDrop se dispara cuando se suelta un objeto arrastrado sobre una zona objetivo. Debe usarse con onDragOver y preventDefault() para funcionar correctamente."
  },
  onWheel: {
    code: `import { useState } from 'react';

export default function OnWheelDemo() {
  const [scrollDelta, setScrollDelta] = useState({ x: 0, y: 0 });
  const [rotationCount, setRotationCount] = useState(0);
  const [direction, setDirection] = useState('');

  const handleWheel = (e: React.WheelEvent) => {
    setScrollDelta({ x: e.deltaX, y: e.deltaY });
    setRotationCount(prev => prev + 1);
    
    if (e.deltaY > 0) {
      setDirection('abajo');
    } else if (e.deltaY < 0) {
      setDirection('arriba');
    } else if (e.deltaX > 0) {
      setDirection('derecha');
    } else if (e.deltaX < 0) {
      setDirection('izquierda');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>onWheel Demo</h2>
      <p>El evento onWheel se dispara cuando se gira la rueda del mouse.</p>
      
      <div 
        onWheel={handleWheel}
        style={{
          width: '100%',
          height: '200px',
          border: '2px solid #6c757d',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f8f9fa',
          cursor: 'default'
        }}
      >
        <p>Rueda el mouse sobre esta área</p>
      </div>

      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '15px', 
        borderRadius: '4px',
        border: '1px solid #dee2e6',
        marginTop: '20px'
      }}>
        <h3>Detalles de la rueda:</h3>
        <p>Dirección: <strong>{direction || 'ninguna'}</strong></p>
        <p>Delta X: {scrollDelta.x}, Delta Y: {scrollDelta.y}</p>
        <p>Rotaciones totales: {rotationCount}</p>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>Instrucciones:</h3>
        <ul>
          <li>Rueda el mouse sobre el área gris</li>
          <li>Observa cómo cambian los valores</li>
          <li>onWheel detecta movimientos verticales y horizontales de la rueda</li>
        </ul>
      </div>
    </div>
  );
}`,
    explanation: "El evento onWheel se dispara cuando se gira la rueda del mouse. Es útil para implementar zoom, desplazamiento personalizado o navegación."
  },
  onScroll: {
    code: `import { useState, useRef } from 'react';

export default function OnScrollDemo() {
  const [scrollTop, setScrollTop] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (containerRef.current) {
      setScrollTop(containerRef.current.scrollTop);
      setScrollLeft(containerRef.current.scrollLeft);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>onScroll Demo</h2>
      <p>El evento onScroll se dispara cuando se realiza un desplazamiento en un elemento.</p>
      
      <div 
        ref={containerRef}
        onScroll={handleScroll}
        style={{
          width: '100%',
          height: '200px',
          border: '2px solid #28a745',
          borderRadius: '8px',
          overflow: 'auto',
          backgroundColor: '#f8f9fa'
        }}
      >
        <div style={{ width: '1200px', height: '600px' }}>
          <div style={{ padding: '20px' }}>
            <h3>Contenido largo para desplazamiento</h3>
            <p>Desplázate en cualquier dirección para ver los valores cambiar.</p>
            <div style={{ height: '500px', backgroundColor: '#e9ecef', margin: '20px 0' }}>
              Área larga para desplazar
            </div>
            <p>Más contenido para desplazar...</p>
          </div>
        </div>
      </div>

      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '15px', 
        borderRadius: '4px',
        border: '1px solid #dee2e6',
        marginTop: '20px'
      }}>
        <h3>Valores de desplazamiento:</h3>
        <p>Scroll Top: <strong>{scrollTop}px</strong></p>
        <p>Scroll Left: <strong>{scrollLeft}px</strong></p>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>Instrucciones:</h3>
        <ul>
          <li>Usa las barras de desplazamiento para moverte</li>
          <li>Observa cómo cambian los valores de scroll</li>
          <li>onScroll detecta movimiento vertical y horizontal</li>
        </ul>
      </div>
    </div>
  );
}`,
    explanation: "El evento onScroll se dispara cuando se realiza un desplazamiento en un elemento. Es útil para implementar carga infinita, efectos parallax o seguimiento de posición."
  },
  onGotPointerCapture: {
    code: `import { useState } from 'react';

export default function OnGotPointerCaptureDemo() {
  const [captureCount, setCaptureCount] = useState(0);
  const [status, setStatus] = useState('Sin captura de puntero');

  const handlePointerDown = (e: React.PointerEvent) => {
    setStatus('Capturando puntero...');
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handleGotPointerCapture = (e: React.PointerEvent) => {
    setCaptureCount(prev => prev + 1);
    setStatus('¡Puntero capturado!');
    setTimeout(() => setStatus('Puntero capturado'), 1000);
  };

  const handleLostPointerCapture = () => {
    setStatus('Puntero liberado');
    setTimeout(() => setStatus('Sin captura de puntero'), 1000);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>onGotPointerCapture Demo</h2>
      <p>El evento onGotPointerCapture se dispara cuando un elemento captura un puntero.</p>
      
      <div 
        onPointerDown={handlePointerDown}
        onGotPointerCapture={handleGotPointerCapture}
        onLostPointerCapture={handleLostPointerCapture}
        style={{
          width: '100%',
          height: '200px',
          border: '2px solid #6f42c1',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f8f9fa',
          cursor: 'pointer'
        }}
      >
        <p style={{ textAlign: 'center' }}>
          Haz clic aquí para capturar el puntero<br/>
          <small>(moverás el puntero sin soltar)</small>
        </p>
      </div>

      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '15px', 
        borderRadius: '4px',
        border: '1px solid #dee2e6',
        marginTop: '20px'
      }}>
        <h3>Contador de capturas:</h3>
        <p>Total de capturas de puntero: <strong>{captureCount}</strong></p>
        <p>Estado actual: {status}</p>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>Instrucciones:</h3>
        <ul>
          <li>Haz clic en el área morada</li>
          <li>El puntero se capturará al elemento</li>
          <li>onGotPointerCapture se activa cuando se logra la captura</li>
        </ul>
      </div>
    </div>
  );
}`,
    explanation: "El evento onGotPointerCapture se dispara cuando un elemento captura un puntero. Esto permite que el elemento reciba eventos de puntero incluso si el puntero se mueve fuera de él."
  },
  onLostPointerCapture: {
    code: `import { useState } from 'react';

export default function OnLostPointerCaptureDemo() {
  const [releaseCount, setReleaseCount] = useState(0);
  const [status, setStatus] = useState('Sin captura de puntero');

  const handlePointerDown = (e: React.PointerEvent) => {
    setStatus('Capturando puntero...');
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handleGotPointerCapture = () => {
    setStatus('¡Puntero capturado!');
  };

  const handleLostPointerCapture = () => {
    setReleaseCount(prev => prev + 1);
    setStatus('¡Puntero liberado!');
    setTimeout(() => setStatus('Sin captura de puntero'), 1500);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>onLostPointerCapture Demo</h2>
      <p>El evento onLostPointerCapture se dispara cuando un elemento pierde la captura de un puntero.</p>
      
      <div 
        onPointerDown={handlePointerDown}
        onGotPointerCapture={handleGotPointerCapture}
        onLostPointerCapture={handleLostPointerCapture}
        style={{
          width: '100%',
          height: '200px',
          border: '2px solid #dc3545',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f8f9fa',
          cursor: 'pointer'
        }}
      >
        <p style={{ textAlign: 'center' }}>
          Haz clic aquí para capturar el puntero<br/>
          <small>(libera el botón para perder la captura)</small>
        </p>
      </div>

      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '15px', 
        borderRadius: '4px',
        border: '1px solid #dee2e6',
        marginTop: '20px'
      }}>
        <h3>Contador de liberaciones:</h3>
        <p>Total de pérdidas de captura: <strong>{releaseCount}</strong></p>
        <p>Estado actual: {status}</p>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>Instrucciones:</h3>
        <ul>
          <li>Haz clic y suelta en el área roja</li>
          <li>Observa cómo se libera la captura</li>
          <li>onLostPointerCapture se activa cuando se pierde la captura</li>
        </ul>
      </div>
    </div>
  );
}`,
    explanation: "El evento onLostPointerCapture se dispara cuando un elemento pierde la captura de un puntero. Ocurre cuando se libera el botón del mouse o se cancela la captura."
  },
  onPointerDown: {
    code: `import { useState } from 'react';

export default function OnPointerDownDemo() {
  const [downCount, setDownCount] = useState(0);
  const [pointerInfo, setPointerInfo] = useState<any>(null);

  const handlePointerDown = (e: React.PointerEvent) => {
    setDownCount(prev => prev + 1);
    setPointerInfo({
      pointerId: e.pointerId,
      pointerType: e.pointerType,
      button: e.button,
      isPrimary: e.isPrimary
    });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>onPointerDown Demo</h2>
      <p>El evento onPointerDown se dispara cuando se presiona un dispositivo apuntador (mouse, touch, pen).</p>
      
      <div 
        onPointerDown={handlePointerDown}
        style={{
          width: '100%',
          height: '200px',
          border: '2px solid #007bff',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f8f9fa',
          cursor: 'pointer'
        }}
      >
        <p>Haz clic o toca aquí</p>
      </div>

      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '15px', 
        borderRadius: '4px',
        border: '1px solid #dee2e6',
        marginTop: '20px'
      }}>
        <h3>Contador de presiones:</h3>
        <p>Total de presiones de puntero: <strong>{downCount}</strong></p>
        
        {pointerInfo && (
          <>
            <h3>Información del puntero:</h3>
            <p>ID: {pointerInfo.pointerId}</p>
            <p>Tipo: {pointerInfo.pointerType}</p>
            <p>Botón: {pointerInfo.button}</p>
            <p>Principal: {String(pointerInfo.isPrimary)}</p>
          </>
        )}
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>Instrucciones:</h3>
        <ul>
          <li>Haz clic con mouse o toca con dedo/palma</li>
          <li>Se capturarán detalles del dispositivo apuntador</li>
          <li>onPointerDown es universal para mouse, touch y pen</li>
        </ul>
      </div>
    </div>
  );
}`,
    explanation: "El evento onPointerDown se dispara cuando se presiona un dispositivo apuntador (mouse, touch, pen). Es una API unificada que combina mouse y touch events."
  },
  onPointerUp: {
    code: `import { useState } from 'react';

export default function OnPointerUpDemo() {
  const [upCount, setUpCount] = useState(0);
  const [lastPointerInfo, setLastPointerInfo] = useState<any>(null);

  const handlePointerDown = (e: React.PointerEvent) => {
    // Solo contamos el evento de liberación
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setUpCount(prev => prev + 1);
    setLastPointerInfo({
      pointerId: e.pointerId,
      pointerType: e.pointerType,
      button: e.button,
      isPrimary: e.isPrimary
    });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>onPointerUp Demo</h2>
      <p>El evento onPointerUp se dispara cuando se suelta un dispositivo apuntador (mouse, touch, pen).</p>
      
      <div 
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        style={{
          width: '100%',
          height: '200px',
          border: '2px solid #28a745',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f8f9fa',
          cursor: 'pointer'
        }}
      >
        <p>Suelta el botón del mouse o levanta el dedo</p>
      </div>

      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '15px', 
        borderRadius: '4px',
        border: '1px solid #dee2e6',
        marginTop: '20px'
      }}>
        <h3>Contador de liberaciones:</h3>
        <p>Total de liberaciones de puntero: <strong>{upCount}</strong></p>
        
        {lastPointerInfo && (
          <>
            <h3>Última información del puntero:</h3>
            <p>ID: {lastPointerInfo.pointerId}</p>
            <p>Tipo: {lastPointerInfo.pointerType}</p>
            <p>Botón: {lastPointerInfo.button}</p>
            <p>Principal: {String(lastPointerInfo.isPrimary)}</p>
          </>
        )}
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>Instrucciones:</h3>
        <ul>
          <li>Presiona y suelta con mouse o touch</li>
          <li>Se capturarán detalles del dispositivo apuntador</li>
          <li>onPointerUp se activa cuando se suelta cualquier puntero</li>
        </ul>
      </div>
    </div>
  );
}`,
    explanation: "El evento onPointerUp se dispara cuando se suelta un dispositivo apuntador (mouse, touch, pen). Es útil para detectar cuándo termina una interacción de puntero."
  },
  onKeyDown: {
    code: `import { useState } from 'react';

export default function OnKeyDownDemo() {
  const [pressedKeys, setPressedKeys] = useState<string[]>([]);
  const [lastKey, setLastKey] = useState<string | null>(null);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    setLastKey(e.key);
    if (!pressedKeys.includes(e.key)) {
      setPressedKeys(prev => [...prev, e.key]);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>onKeyDown Demo</h2>
      <p>El evento onKeyDown se dispara cuando se presiona una tecla.</p>
      
      <div 
        tabIndex={0}
        onKeyDown={handleKeyDown}
        style={{
          width: '100%',
          height: '200px',
          border: '2px solid #ffc107',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fff3cd',
          outline: 'none',
          cursor: 'pointer'
        }}
      >
        <p style={{ textAlign: 'center' }}>
          Haz clic aquí y presiona teclas<br/>
          <small>(el área debe estar enfocada)</small>
        </p>
      </div>

      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '15px', 
        borderRadius: '4px',
        border: '1px solid #dee2e6',
        marginTop: '20px'
      }}>
        <h3>Última tecla presionada:</h3>
        <p>{lastKey ? \`Tecla: \${lastKey}\` : 'Ninguna tecla presionada'}</p>
        
        <h3>Teclas presionadas:</h3>
        <p>{pressedKeys.join(', ') || 'Ninguna'}</p>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>Instrucciones:</h3>
        <ul>
          <li>Haz clic en el área amarilla</li>
          <li>Presiona cualquier tecla del teclado</li>
          <li>onKeyDown se activa al presionar cada tecla</li>
        </ul>
      </div>
    </div>
  );
}`,
    explanation: "El evento onKeyDown se dispara cuando se presiona una tecla. Es útil para atajos de teclado, controles de juego o manejo de entrada en tiempo real."
  },
  onKeyUp: {
    code: `import { useState } from 'react';

export default function OnKeyUpDemo() {
  const [releasedKeys, setReleasedKeys] = useState<string[]>([]);
  const [lastReleased, setLastReleased] = useState<string | null>(null);

  const handleKeyUp = (e: React.KeyboardEvent) => {
    setLastReleased(e.key);
    if (!releasedKeys.includes(e.key)) {
      setReleasedKeys(prev => [...prev, e.key]);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>onKeyUp Demo</h2>
      <p>El evento onKeyUp se dispara cuando se suelta una tecla.</p>
      
      <div 
        tabIndex={0}
        onKeyUp={handleKeyUp}
        style={{
          width: '100%',
          height: '200px',
          border: '2px solid #fd7e14',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#ffeaa7',
          outline: 'none',
          cursor: 'pointer'
        }}
      >
        <p style={{ textAlign: 'center' }}>
          Haz clic aquí y presiona/suelta teclas<br/>
          <small>(el área debe estar enfocada)</small>
        </p>
      </div>

      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '15px', 
        borderRadius: '4px',
        border: '1px solid #dee2e6',
        marginTop: '20px'
      }}>
        <h3>Última tecla soltada:</h3>
        <p>{lastReleased ? \`Tecla: \${lastReleased}\` : 'Ninguna tecla soltada'}</p>
        
        <h3>Teclas soltadas:</h3>
        <p>{releasedKeys.join(', ') || 'Ninguna'}</p>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>Instrucciones:</h3>
        <ul>
          <li>Haz clic en el área naranja</li>
          <li>Presiona y suelta cualquier tecla</li>
          <li>onKeyUp se activa al soltar cada tecla</li>
        </ul>
      </div>
    </div>
  );
}`,
    explanation: "El evento onKeyUp se dispara cuando se suelta una tecla. Es útil para detectar cuándo termina una interacción de teclado."
  },
  onKeyPress: {
    code: `import { useState } from 'react';

export default function OnKeyPressDemo() {
  const [pressedChars, setPressedChars] = useState<string[]>([]);
  const [lastChar, setLastChar] = useState<string | null>(null);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    // onKeyPress se activa solo para caracteres imprimibles
    setLastChar(e.key);
    if (!pressedChars.includes(e.key) && e.key.length === 1) {
      setPressedChars(prev => [...prev, e.key]);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>onKeyPress Demo</h2>
      <p>El evento onKeyPress se dispara cuando se presiona una tecla de carácter.</p>
      
      <div 
        tabIndex={0}
        onKeyPress={handleKeyPress}
        style={{
          width: '100%',
          height: '200px',
          border: '2px solid #6f42c1',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#e2e3e5',
          outline: 'none',
          cursor: 'pointer'
        }}
      >
        <p style={{ textAlign: 'center' }}>
          Haz clic aquí y presiona teclas de carácter<br/>
          <small>(no funciona con teclas especiales)</small>
        </p>
      </div>

      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '15px', 
        borderRadius: '4px',
        border: '1px solid #dee2e6',
        marginTop: '20px'
      }}>
        <h3>Último carácter presionado:</h3>
        <p>{lastChar ? \`Carácter: \${lastChar}\` : 'Ningún carácter presionado'}</p>
        
        <h3>Caracteres presionados:</h3>
        <p>{pressedChars.join(', ') || 'Ninguno'}</p>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>Instrucciones:</h3>
        <ul>
          <li>Haz clic en el área morada</li>
          <li>Presiona teclas de caracteres (letras/números)</li>
          <li>onKeyPress se activa solo para caracteres imprimibles</li>
        </ul>
      </div>
    </div>
  );
}`,
    explanation: "El evento onKeyPress se dispara cuando se presiona una tecla de carácter imprimible. Está obsoleto y se recomienda usar onKeyDown/onKeyUp en su lugar."
  },
  onInput: {
    code: `import { useState } from 'react';

export default function OnInputDemo() {
  const [value, setValue] = useState('');
  const [inputCount, setInputCount] = useState(0);

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
    setInputCount(prev => prev + 1);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>onInput Demo</h2>
      <p>El evento onInput se dispara cuando cambia el valor de un elemento de entrada.</p>
      
      <div style={{
        width: '100%',
        height: '200px',
        border: '2px solid #17a2b8',
        borderRadius: '8px',
        padding: '20px',
        backgroundColor: '#f8f9fa'
      }}>
        <label htmlFor="input-field">Campo de texto:</label>
        <input
          id="input-field"
          type="text"
          value={value}
          onInput={handleInput}
          placeholder="Escribe aquí..."
          style={{
            width: '100%',
            padding: '10px',
            fontSize: '16px',
            border: '1px solid #ced4da',
            borderRadius: '4px',
            marginTop: '10px'
          }}
        />
        
        <div style={{ marginTop: '15px' }}>
          <p>Valor actual: <strong>{value}</strong></p>
          <p>Caracteres: {value.length}</p>
        </div>
      </div>

      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '15px', 
        borderRadius: '4px',
        border: '1px solid #dee2e6',
        marginTop: '20px'
      }}>
        <h3>Contador de entradas:</h3>
        <p>Total de cambios de entrada: <strong>{inputCount}</strong></p>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>Instrucciones:</h3>
        <ul>
          <li>Escribe en el campo de texto</li>
          <li>onInput se activa con cada cambio de valor</li>
          <li>Es más sensible que onChange (se activa en tiempo real)</li>
        </ul>
      </div>
    </div>
  );
}`,
    explanation: "El evento onInput se activa inmediatamente cuando cambia el valor de un elemento de entrada. Es ideal para validación en tiempo real o autocompletado."
  },
  onChange: {
    code: `import { useState } from 'react';

export default function OnChangeDemo() {
  const [value, setValue] = useState('');
  const [changeCount, setChangeCount] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setChangeCount(prev => prev + 1);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>onChange Demo</h2>
      <p>El evento onChange se dispara cuando cambia el valor de un elemento y pierde el foco.</p>
      
      <div style={{
        width: '100%',
        height: '200px',
        border: '2px solid #28a745',
        borderRadius: '8px',
        padding: '20px',
        backgroundColor: '#f8f9fa'
      }}>
        <label htmlFor="change-field">Campo de texto:</label>
        <input
          id="change-field"
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Escribe aquí y haz clic afuera..."
          style={{
            width: '100%',
            padding: '10px',
            fontSize: '16px',
            border: '1px solid #ced4da',
            borderRadius: '4px',
            marginTop: '10px'
          }}
        />
        
        <div style={{ marginTop: '15px' }}>
          <p>Valor actual: <strong>{value}</strong></p>
          <p>Caracteres: {value.length}</p>
        </div>
      </div>

      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '15px', 
        borderRadius: '4px',
        border: '1px solid #dee2e6',
        marginTop: '20px'
      }}>
        <h3>Contador de cambios:</h3>
        <p>Total de cambios confirmados: <strong>{changeCount}</strong></p>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>Instrucciones:</h3>
        <ul>
          <li>Escribe en el campo de texto</li>
          <li>Haz clic fuera del campo para activar onChange</li>
          <li>onChange se activa cuando el valor cambia y se pierde el foco</li>
        </ul>
      </div>
    </div>
  );
}`,
    explanation: "El evento onChange se dispara cuando cambia el valor de un elemento y pierde el foco. Es ideal para formularios controlados donde se necesita procesar el valor completo."
  },
  onFocus: {
    code: `import { useState } from 'react';

export default function OnFocusDemo() {
  const [focusCount, setFocusCount] = useState(0);
  const [hasFocus, setHasFocus] = useState(false);

  const handleFocus = () => {
    setFocusCount(prev => prev + 1);
    setHasFocus(true);
  };

  const handleBlur = () => {
    setHasFocus(false);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>onFocus Demo</h2>
      <p>El evento onFocus se dispara cuando un elemento recibe el foco.</p>
      
      <div style={{
        width: '100%',
        height: '200px',
        border: '2px solid #007bff',
        borderRadius: '8px',
        padding: '20px',
        backgroundColor: hasFocus ? '#e7f3ff' : '#f8f9fa',
        transition: 'background-color 0.3s ease'
      }}>
        <label htmlFor="focus-field">Campo de texto:</label>
        <input
          id="focus-field"
          type="text"
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="Haz clic aquí para enfocar..."
          style={{
            width: '100%',
            padding: '10px',
            fontSize: '16px',
            border: hasFocus ? '2px solid #007bff' : '1px solid #ced4da',
            borderRadius: '4px',
            marginTop: '10px'
          }}
        />
        
        <div style={{ marginTop: '15px' }}>
          <p>Estado: {hasFocus ? 'Enfocado' : 'Sin foco'}</p>
        </div>
      </div>

      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '15px', 
        borderRadius: '4px',
        border: '1px solid #dee2e6',
        marginTop: '20px'
      }}>
        <h3>Contador de enfoques:</h3>
        <p>Total de veces enfocado: <strong>{focusCount}</strong></p>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>Instrucciones:</h3>
        <ul>
          <li>Haz clic en el campo de texto</li>
          <li>El campo cambiará de estilo al enfocarse</li>
          <li>onFocus se activa cuando el elemento recibe foco</li>
        </ul>
      </div>
    </div>
  );
}`,
    explanation: "El evento onFocus se dispara cuando un elemento recibe el foco. Es útil para resaltar campos activos o cargar datos cuando un elemento es accesible."
  },
  onBlur: {
    code: `import { useState } from 'react';

export default function OnBlurDemo() {
  const [blurCount, setBlurCount] = useState(0);
  const [hasFocus, setHasFocus] = useState(false);

  const handleFocus = () => {
    setHasFocus(true);
  };

  const handleBlur = () => {
    setBlurCount(prev => prev + 1);
    setHasFocus(false);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>onBlur Demo</h2>
      <p>El evento onBlur se dispara cuando un elemento pierde el foco.</p>
      
      <div style={{
        width: '100%',
        height: '200px',
        border: '2px solid #6c757d',
        borderRadius: '8px',
        padding: '20px',
        backgroundColor: hasFocus ? '#e2e3e5' : '#f8f9fa',
        transition: 'background-color 0.3s ease'
      }}>
        <label htmlFor="blur-field">Campo de texto:</label>
        <input
          id="blur-field"
          type="text"
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="Haz clic aquí y luego haz clic afuera..."
          style={{
            width: '100%',
            padding: '10px',
            fontSize: '16px',
            border: hasFocus ? '2px solid #6c757d' : '1px solid #ced4da',
            borderRadius: '4px',
            marginTop: '10px'
          }}
        />
        
        <div style={{ marginTop: '15px' }}>
          <p>Estado: {hasFocus ? 'Enfocado' : 'Sin foco'}</p>
        </div>
      </div>

      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '15px', 
        borderRadius: '4px',
        border: '1px solid #dee2e6',
        marginTop: '20px'
      }}>
        <h3>Contador de pérdida de enfoque:</h3>
        <p>Total de veces que perdió foco: <strong>{blurCount}</strong></p>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>Instrucciones:</h3>
        <ul>
          <li>Haz clic en el campo de texto</li>
          <li>Luego haz clic fuera del campo</li>
          <li>onBlur se activa cuando el elemento pierde foco</li>
        </ul>
      </div>
    </div>
  );
}`,
    explanation: "El evento onBlur se dispara cuando un elemento pierde el foco. Es ideal para validación de formularios o guardar datos cuando un campo deja de ser activo."
  },
  onSubmit: {
    code: `import { useState } from 'react';

export default function OnSubmitDemo() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [submitCount, setSubmitCount] = useState(0);
  const [submittedData, setSubmittedData] = useState<any>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitCount(prev => prev + 1);
    setSubmittedData({ ...formData, timestamp: new Date().toISOString() });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>onSubmit Demo</h2>
      <p>El evento onSubmit se dispara cuando se envía un formulario.</p>
      
      <form onSubmit={handleSubmit} style={{
        width: '100%',
        height: '200px',
        border: '2px solid #28a745',
        borderRadius: '8px',
        padding: '20px',
        backgroundColor: '#f8f9fa'
      }}>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="name">Nombre:</label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #ced4da',
              borderRadius: '4px',
              marginTop: '4px'
            }}
          />
        </div>
        
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #ced4da',
              borderRadius: '4px',
              marginTop: '4px'
            }}
          />
        </div>
        
        <button 
          type="submit"
          style={{
            padding: '8px 16px',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Enviar formulario
        </button>
      </form>

      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '15px', 
        borderRadius: '4px',
        border: '1px solid #dee2e6',
        marginTop: '20px'
      }}>
        <h3>Contador de envíos:</h3>
        <p>Total de formularios enviados: <strong>{submitCount}</strong></p>
        
        {submittedData && (
          <>
            <h3>Último envío:</h3>
            <p>Nombre: {submittedData.name}</p>
            <p>Email: {submittedData.email}</p>
          </>
        )}
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>Instrucciones:</h3>
        <ul>
          <li>Llena el formulario y haz clic en "Enviar"</li>
          <li>onSubmit se activa al enviar el formulario</li>
          <li>Usa preventDefault() para controlar el comportamiento</li>
        </ul>
      </div>
    </div>
  );
}`,
    explanation: "El evento onSubmit se dispara cuando se envía un formulario. Es crucial para manejar el envío de datos, validar formularios o prevenir el comportamiento predeterminado."
  },
  onReset: {
    code: `import { useState } from 'react';

export default function OnResetDemo() {
  const [formData, setFormData] = useState({ name: 'Juan', email: 'juan@example.com' });
  const [resetCount, setResetCount] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Formulario enviado con: ' + JSON.stringify(formData));
  };

  const handleReset = () => {
    setFormData({ name: 'Juan', email: 'juan@example.com' });
    setResetCount(prev => prev + 1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>onReset Demo</h2>
      <p>El evento onReset se dispara cuando se restablece un formulario.</p>
      
      <form onSubmit={handleSubmit} onReset={handleReset} style={{
        width: '100%',
        height: '200px',
        border: '2px solid #ffc107',
        borderRadius: '8px',
        padding: '20px',
        backgroundColor: '#fff3cd'
      }}>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="reset-name">Nombre:</label>
          <input
            id="reset-name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #ced4da',
              borderRadius: '4px',
              marginTop: '4px'
            }}
          />
        </div>
        
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="reset-email">Email:</label>
          <input
            id="reset-email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #ced4da',
              borderRadius: '4px',
              marginTop: '4px'
            }}
          />
        </div>
        
        <div style={{ display: 'flex', gap: '10px' }}>
          <button 
            type="submit"
            style={{
              padding: '8px 16px',
              backgroundColor: '#17a2b8',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Enviar
          </button>
          
          <button 
            type="reset"
            style={{
              padding: '8px 16px',
              backgroundColor: '#ffc107',
              color: '#212529',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Restablecer
          </button>
        </div>
      </form>

      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '15px', 
        borderRadius: '4px',
        border: '1px solid #dee2e6',
        marginTop: '20px'
      }}>
        <h3>Contador de restablecimientos:</h3>
        <p>Total de veces que se restableció: <strong>{resetCount}</strong></p>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>Instrucciones:</h3>
        <ul>
          <li>Modifica los campos del formulario</li>
          <li>Haz clic en "Restablecer" para activar onReset</li>
          <li>onReset restaura los valores iniciales del formulario</li>
        </ul>
      </div>
    </div>
  );
}`,
    explanation: "El evento onReset se dispara cuando se restablece un formulario. Es útil para limpiar campos o revertir cambios cuando el usuario decide reiniciar el formulario."
  },
  onInvalid: {
    code: `import { useState } from 'react';

export default function OnInvalidDemo() {
  const [invalidCount, setInvalidCount] = useState(0);
  const [lastInvalidField, setLastInvalidField] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // El formulario no se enviará si hay campos inválidos
  };

  const handleInvalid = (e: React.FormEvent<HTMLInputElement>) => {
    setInvalidCount(prev => prev + 1);
    setLastInvalidField(e.currentTarget.name);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>onInvalid Demo</h2>
      <p>El evento onInvalid se dispara cuando un campo no cumple con su validación.</p>
      
      <form onSubmit={handleSubmit} style={{
        width: '100%',
        height: '200px',
        border: '2px solid #dc3545',
        borderRadius: '8px',
        padding: '20px',
        backgroundColor: '#f8f9fa'
      }}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="invalid-email">Email (requerido):</label>
          <input
            id="invalid-email"
            name="email"
            type="email"
            required
            onInvalid={handleInvalid}
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #ced4da',
              borderRadius: '4px',
              marginTop: '4px'
            }}
            placeholder="Introduce un email válido"
          />
        </div>
        
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="invalid-number">Número (0-100):</label>
          <input
            id="invalid-number"
            name="number"
            type="number"
            min="0"
            max="100"
            onInvalid={handleInvalid}
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #ced4da',
              borderRadius: '4px',
              marginTop: '4px'
            }}
            placeholder="Introduce un número entre 0 y 100"
          />
        </div>
        
        <button 
          type="submit"
          style={{
            padding: '8px 16px',
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Enviar formulario
        </button>
      </form>

      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '15px', 
        borderRadius: '4px',
        border: '1px solid #dee2e6',
        marginTop: '20px'
      }}>
        <h3>Contador de campos inválidos:</h3>
        <p>Total de validaciones fallidas: <strong>{invalidCount}</strong></p>
        <p>Último campo inválido: {lastInvalidField || 'Ninguno'}</p>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>Instrucciones:</h3>
        <ul>
          <li>Deja el campo de email vacío o introduce uno inválido</li>
          <li>Introduce un número fuera del rango 0-100</li>
          <li>onInvalid se activa cuando se intenta enviar datos inválidos</li>
        </ul>
      </div>
    </div>
  );
}`,
    explanation: "El evento onInvalid se dispara cuando un campo no cumple con sus restricciones de validación. Es útil para mostrar mensajes de error personalizados o realizar validaciones adicionales."
  },
  onSelect: {
    code: `import { useState } from 'react';

export default function OnSelectDemo() {
  const [selection, setSelection] = useState({ start: 0, end: 0, text: '' });
  const [selectCount, setSelectCount] = useState(0);

  const handleSelect = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setSelection({
      start: target.selectionStart || 0,
      end: target.selectionEnd || 0,
      text: target.value.substring(target.selectionStart || 0, target.selectionEnd || 0)
    });
    setSelectCount(prev => prev + 1);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>onSelect Demo</h2>
      <p>El evento onSelect se dispara cuando se selecciona texto en un input o textarea.</p>
      
      <div style={{
        width: '100%',
        height: '200px',
        border: '2px solid #6f42c1',
        borderRadius: '8px',
        padding: '20px',
        backgroundColor: '#f8f9fa'
      }}>
        <label htmlFor="select-text">Texto para seleccionar:</label>
        <input
          id="select-text"
          type="text"
          defaultValue="Selecciona parte de este texto para ver el evento onSelect"
          onSelect={handleSelect}
          style={{
            width: '100%',
            padding: '10px',
            fontSize: '16px',
            border: '1px solid #ced4da',
            borderRadius: '4px',
            marginTop: '10px'
          }}
        />
        
        <div style={{ marginTop: '15px' }}>
          <p>Texto seleccionado: <strong>"{selection.text}"</strong></p>
          <p>Rango: {selection.start}-{selection.end}</p>
        </div>
      </div>

      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '15px', 
        borderRadius: '4px',
        border: '1px solid #dee2e6',
        marginTop: '20px'
      }}>
        <h3>Contador de selecciones:</h3>
        <p>Total de selecciones de texto: <strong>{selectCount}</strong></p>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>Instrucciones:</h3>
        <ul>
          <li>Selecciona parte del texto en el campo</li>
          <li>onSelect se activa al seleccionar texto</li>
          <li>Obtienes información sobre la posición y contenido de la selección</li>
        </ul>
      </div>
    </div>
  );
}`,
    explanation: "El evento onSelect se dispara cuando se selecciona texto en un input o textarea. Es útil para implementar características como resaltado de texto, copiado personalizado o análisis de selección."
  }
};

type EventType = {
  id: string;
  name: string;
  description: string;
  category: 'mouse' | 'teclado';
};

type CategoryType = {
  title: string;
  events: EventType[];
};

const categories: CategoryType[] = [
  {
    title: "Eventos de Clic",
    events: [
      { id: 'onClick', name: 'onClick', description: 'Clic simple del mouse', category: 'mouse' },
      { id: 'onDoubleClick', name: 'onDoubleClick', description: 'Doble clic', category: 'mouse' },
      { id: 'onContextMenu', name: 'onContextMenu', description: 'Clic derecho (menú contextual)', category: 'mouse' },
      { id: 'onAuxClick', name: 'onAuxClick', description: 'Clic con botón central/auxiliar', category: 'mouse' },
    ]
  },
  {
    title: "Eventos de Movimiento/Posición",
    events: [
      { id: 'onMouseEnter', name: 'onMouseEnter', description: 'Mouse entra en el elemento', category: 'mouse' },
      { id: 'onMouseLeave', name: 'onMouseLeave', description: 'Mouse sale del elemento', category: 'mouse' },
      { id: 'onMouseOver', name: 'onMouseOver', description: 'Mouse sobre el elemento (se propaga)', category: 'mouse' },
      { id: 'onMouseOut', name: 'onMouseOut', description: 'Mouse sale del elemento (se propaga)', category: 'mouse' },
      { id: 'onMouseMove', name: 'onMouseMove', description: 'Mouse se mueve sobre el elemento', category: 'mouse' },
      { id: 'onMouseDown', name: 'onMouseDown', description: 'Botón del mouse presionado', category: 'mouse' },
      { id: 'onMouseUp', name: 'onMouseUp', description: 'Botón del mouse liberado', category: 'mouse' },
    ]
  },
  {
    title: "Eventos de Arrastre (Drag & Drop)",
    events: [
      { id: 'onDrag', name: 'onDrag', description: 'Elemento siendo arrastrado', category: 'mouse' },
      { id: 'onDragStart', name: 'onDragStart', description: 'Comienza el arrastre', category: 'mouse' },
      { id: 'onDragEnd', name: 'onDragEnd', description: 'Termina el arrastre', category: 'mouse' },
      { id: 'onDragEnter', name: 'onDragEnter', description: 'Elemento arrastrado entra en zona', category: 'mouse' },
      { id: 'onDragLeave', name: 'onDragLeave', description: 'Elemento arrastrado sale de zona', category: 'mouse' },
      { id: 'onDragOver', name: 'onDragOver', description: 'Elemento arrastrado sobre zona', category: 'mouse' },
      { id: 'onDrop', name: 'onDrop', description: 'Elemento soltado en zona', category: 'mouse' },
    ]
  },
  {
    title: "Eventos Especiales",
    events: [
      { id: 'onWheel', name: 'onWheel', description: 'Rueda del mouse girando', category: 'mouse' },
      { id: 'onScroll', name: 'onScroll', description: 'Scroll en elemento', category: 'mouse' },
      { id: 'onGotPointerCapture', name: 'onGotPointerCapture', description: 'Elemento captura puntero', category: 'mouse' },
      { id: 'onLostPointerCapture', name: 'onLostPointerCapture', description: 'Elemento pierde puntero', category: 'mouse' },
      { id: 'onPointerDown', name: 'onPointerDown', description: 'Puntero presionado (mouse/touch)', category: 'mouse' },
      { id: 'onPointerUp', name: 'onPointerUp', description: 'Puntero liberado (mouse/touch)', category: 'mouse' },
    ]
  }
];

const keyboardCategories: CategoryType[] = [
  {
    title: "Eventos de Tecla",
    events: [
      { id: 'onKeyDown', name: 'onKeyDown', description: 'Tecla presionada', category: 'teclado' },
      { id: 'onKeyUp', name: 'onKeyUp', description: 'Tecla liberada', category: 'teclado' },
      { id: 'onKeyPress', name: 'onKeyPress', description: 'Tecla presionada (carácter) ⚠️ Deprecated', category: 'teclado' },
    ]
  },
  {
    title: "Eventos de Entrada/Texto",
    events: [
      { id: 'onInput', name: 'onInput', description: 'Valor de input cambia', category: 'teclado' },
      { id: 'onChange', name: 'onChange', description: 'Valor cambia y pierde foco', category: 'teclado' },
      { id: 'onFocus', name: 'onFocus', description: 'Elemento recibe foco', category: 'teclado' },
      { id: 'onBlur', name: 'onBlur', description: 'Elemento pierde foco', category: 'teclado' },
    ]
  },
  {
    title: "Eventos de Formulario",
    events: [
      { id: 'onSubmit', name: 'onSubmit', description: 'Formulario enviado', category: 'teclado' },
      { id: 'onReset', name: 'onReset', description: 'Formulario reseteado', category: 'teclado' },
      { id: 'onInvalid', name: 'onInvalid', description: 'Input inválido', category: 'teclado' },
      { id: 'onSelect', name: 'onSelect', description: 'Texto seleccionado en input/textarea', category: 'teclado' },
    ]
  }
];

export default function Home() {
  const [selectedEvent, setSelectedEvent] = useState<EventType | null>(null);

  const renderSelectedComponent = () => {
    if (!selectedEvent) return null;
    
    // Si el componente está implementado, lo mostramos
    const Component = componentsMap[selectedEvent.id];
    if (Component) {
      return <Component />;
    }
    
    // Si no está implementado, mostramos el código de ejemplo
    const example = exampleCodeMap[selectedEvent.id];
    if (example) {
      return (
        <div className={styles.exampleContainer}>
          <h2>{selectedEvent.name}</h2>
          <p className={styles.explanation}>{example.explanation}</p>
          
          <div className={styles.codeBlock}>
            <pre><code>{example.code}</code></pre>
          </div>
          
          <div className={styles.instructions}>
            <h3>Instrucciones:</h3>
            <p>Este es un ejemplo de cómo implementar el evento <strong>{selectedEvent.name}</strong>. 
               Puedes copiar este código y adaptarlo a tus necesidades.</p>
          </div>
        </div>
      );
    }
    
    // Si no hay ejemplo disponible
    return <div className={styles.notImplemented}>Componente "{selectedEvent.id}" aún no desarrollado</div>;
  };

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <h2>Eventos del Mouse</h2>
        {categories.map((category, index) => (
          <Accordion key={index} title={category.title}>
            {category.events.map(event => (
              <button
                key={event.id}
                className={`${styles.menuItem} ${selectedEvent?.id === event.id ? styles.active : ''}`}
                onClick={() => setSelectedEvent(event)}
              >
                <span className={styles.eventName}>{event.name}</span>
                <span className={styles.eventDescription}>{event.description}</span>
              </button>
            ))}
          </Accordion>
        ))}
        
        <h2>Eventos del Teclado</h2>
        {keyboardCategories.map((category, index) => (
          <Accordion key={`kbd-${index}`} title={category.title}>
            {category.events.map(event => (
              <button
                key={event.id}
                className={`${styles.menuItem} ${selectedEvent?.id === event.id ? styles.active : ''}`}
                onClick={() => setSelectedEvent(event)}
              >
                <span className={styles.eventName}>{event.name}</span>
                <span className={styles.eventDescription}>{event.description}</span>
              </button>
            ))}
          </Accordion>
        ))}
      </div>
      
      <main className={styles.mainContent}>
        {selectedEvent ? (
          renderSelectedComponent()
        ) : (
          <div className={styles.welcomeMessage}>
            <h1>Panel de Eventos</h1>
            <p>Selecciona un evento del menú para ver su demostración o código de ejemplo</p>
          </div>
        )}
      </main>
    </div>
  );
}

function Accordion({ title, children }: { title: string; children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.accordion}>
      <button 
        className={styles.accordionHeader}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <span className={`${styles.arrow} ${isOpen ? styles.open : ''}`}>▼</span>
      </button>
      {isOpen && <div className={styles.accordionContent}>{children}</div>}
    </div>
  );
}