import React from 'react'

function Sidebar(){
  
    return (
      <div><nav class="sidebar">
      <ul class="side-nav">

          <li class="side-nav__item side-nav__item--active">
              <a href="#" class="side-nav__link">
                  <svg class="side-nav__icon">
                      <use xlink:href="img/sprite.svg#icon-map"></use>
                  </svg>
                  <span>home</span>
              </a>
          </li>



          <li class="side-nav__item ">
              <a href="#" class="side-nav__link">
                  <svg class="side-nav__icon">

                  </svg>
                  <span>Task Board</span>
              </a>
          </li>
          <li class="side-nav__item">
              <a href="#" class="side-nav__link">
                  <svg class="side-nav__icon">
                  </svg>
                  <span>Mediators</span>
              </a>
          </li>
          <li class="side-nav__item">
              <a href="#" class="side-nav__link">
                  <svg class="side-nav__icon">
                      <use xlink:href="img/sprite.svg#icon-key"></use>
                  </svg>
                  <span>Official Agents</span>
              </a>
          </li>
          <li class="side-nav__item">
              <a href="#" class="side-nav__link">
                  <svg class="side-nav__icon">
                      <use xlink:href="img/sprite.svg#icon-map"></use>
                  </svg>
                  <span>Tasks</span>
              </a>
          </li>
      </ul>
  </nav>

  <main class="sub_nav">
      <div class="overview">
          <div class="overview__location">
              <svg class="overview__icon-location">
                  <use xlink:href="img/sprite.svg#icon-location-pin"></use>
              </svg>
              <button class="btn-inline">some button to click</button>
          </div>
      </div>


  </main>

</div>



    )
  
}

export default Sidebar