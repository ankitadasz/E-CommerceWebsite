import styled from "styled-components";

const Switch = ({ checked, onChange }) => {
  return (
    <StyledWrapper>
      <label className="theme-switch">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
        />

        <span className="slider">
          <span className="switch-icon">
            {checked ? "☾" : "☀"}
          </span>
        </span>
      </label>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .theme-switch {
    position: relative;
    display: inline-block;
    width: 48px;
    height: 26px;
    cursor: pointer;
  }

  .theme-switch input {
    display: none;
  }

  .slider {
    position: absolute;
    inset: 0;
    background: #f5f5f6;
    border: 1px solid #e0e0e0;
    border-radius: 50px;
    transition: all 0.25s ease;
  }

  .slider::before {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    top: 2px;
    left: 2px;
    background: #ffffff;
    border-radius: 50%;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
    transition: all 0.25s ease;
  }

  .switch-icon {
    position: absolute;
    left: 7px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 11px;
    color: #ff3f6c;
    z-index: 2;
    transition: all 0.25s ease;
    line-height: 1;
  }

  /* DARK MODE */
  .theme-switch input:checked + .slider {
    background: #ff3f6c;
    border-color: #ff3f6c;
  }

  .theme-switch input:checked + .slider::before {
    transform: translateX(22px);
  }

  .theme-switch input:checked + .slider .switch-icon {
    transform: translate(22px, -50%);
    color: #282c3f;
  }

  .theme-switch:hover .slider {
    box-shadow: 0 4px 12px rgba(255, 63, 108, 0.18);
  }
`;

export default Switch;